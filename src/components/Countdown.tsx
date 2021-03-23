import { useContext } from 'react';
import { ContdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


export function Countdown() {
    
    const { minutes, seconds, hasFinished, isActive, startCountdonw, resetCoutdonw } = useContext(ContdownContext);

    const [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');
    const [ secondLeft, secondRight ] = String(seconds).padStart(2, '0').split('');
    

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