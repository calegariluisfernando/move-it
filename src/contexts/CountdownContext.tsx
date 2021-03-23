import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

let countdownTimeout: NodeJS.Timeout;
let countdownValue = 0.1;

interface CountdonwContextData {
    
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdonw: () => void;
    resetCoutdonw: () => void;
}

interface CountdonwProviderProps {
    
    children: ReactNode
}

export const ContdownContext = createContext({} as CountdonwContextData);

export function CountdonwProvider({ children }: CountdonwProviderProps) {

    const { startNewChallenge } = useContext(ChallengesContext);

    const [ time, setTime ] = useState(countdownValue * 60);
    const [ isActive, setIsActive ] = useState(false);
    const [ hasFinished, setHasFinished ] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdonw() {
        
        setIsActive(true);
    }

    function resetCoutdonw() {

        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTime(countdownValue * 60);
    }

    useEffect(() => {

        if (isActive && time  > 0) {

            countdownTimeout = setTimeout(() => setTime(time - 1) , 1000);
        } else if (isActive && time === 0) {

            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }

    }, [ isActive, time ]);

    return (
        <ContdownContext.Provider value={{
            minutes, seconds, hasFinished, isActive,
            startCountdonw, resetCoutdonw
        }}>
            {children}
        </ContdownContext.Provider>
    );
}