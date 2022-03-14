import styles from "./firstsection.module.css";

const Firstsection = () => {
    let timer;
    const d = new Date();
    let hour = d.getHours();
    if (hour < 12) {
        timer = "Morning";
    } else if (hour > 12 && hour < 16) {
        timer = "Afternoon";
    } else if (hour > 15 && hour < 24) {
        timer = "Evening";
    }
    return (
        <div className={styles.cover}>
            <h1 className={styles.heading_1}>
                Hello Good <span className={styles.pan_1}> {timer} </span>
            </h1>
            <p className={styles.para_1}>
                The greeting above is automated which means it will dynamically adjust
                to the current time anywhere in the world
            </p>
        </div>
    );
};

export default Firstsection;
