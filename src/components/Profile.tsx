import styles from '../styles/components/Profile.module.css';

export function Profile() {

    return (

        <div className={styles.profileContainer}>
            <img src="https://github.com/calegariluisfernando.png" alt="Luis Fernando Calegari"/>
            <div>
                <strong>Luis Fernando Calegari</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}