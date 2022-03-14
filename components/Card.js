import Image from "next/image";
import styles from './card.module.css'

const Card = (props) => {
    return <div className={styles.container}>
        <Image src={props.image} alt="myimage" width={200} height={200} />
        <h1 className={styles.hack}>{props.head1}</h1>
        <p className={styles.para}>{props.p1}</p>
        <a className={styles.links} href={props.link} target='blank'>click here</a>
    </div>
}

export default Card;