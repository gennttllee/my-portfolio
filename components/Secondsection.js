
import Image from "next/image";
import styles from "./secondsection.module.css";

const Secondsection = (props) => {
    return (
        <div className={styles.headline}>
            <div className={styles.image_1}>
                <Image src={props.image} alt="myimage" width={150} height={200} />
            </div>
            <h3 className={styles.heading_3}>
                {props.heady}
            </h3>
            <p className={styles.para_1}>
                {props.para}
            </p>
        </div>
    );
};

export default Secondsection;
