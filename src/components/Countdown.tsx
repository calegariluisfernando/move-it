import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';


let countdownTimeout: NodeJS.Timeout;
let countdownValue = 0.1;

export function Countdown() {

    const [ time, setTime ] = useState(countdownValue * 60);
    const [ isActive, setIsActive ] = useState(false);
    const [ hasFinished, setHasFinished ] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');
    const [ secondLeft, secondRight ] = String(seconds).padStart(2, '0').split('');

    function startCountdonw() {
        
        setIsActive(true);
    }

    function resetCoutdonw() {

        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(countdownValue * 60);
    }

    useEffect(() => {

        if (isActive && time  > 0) {

            countdownTimeout = setTimeout(() => setTime(time - 1) , 1000);
        } else if (isActive && time === 0) {

            setHasFinished(true);
            setIsActive(false);
        }

    }, [ isActive, time ]);

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{ minuteLeft }</span>
                    <span>{ minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{ secondLeft }</span>
                    <span>{ secondRight }</span>
                </div>
            </div>

            { hasFinished ? (
                
                <button 
                    disabled
                    className={ styles.contdownButton }
                >
                
                Ciclo encerrado
                </button>
            ) : (

                <>
                    { isActive ? (

                        <button 
                            type="button"
                            className={ `${ styles.contdownButton } ${ styles.contdownButtonActive }` }
                            onClick={ resetCoutdonw }
                        >
                            Abondonar ciclo
                        </button>
                        ) : (

                        <button 
                            type="button"
                            className={ styles.contdownButton }
                            onClick={ startCountdonw }
                        >
                            Iniciar um ciclo
                        </button>
                        )}
                </>
            )}
        </div>
    );
}