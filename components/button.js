import Link from 'next/link';
import styles from './button.module.css'

const Button =(props)=>{
    return <div className={styles.button}>
        <button onClick={props.click} className={styles.main_button} type="submit">
            <Link href={props.route}>
                <a>{props.name}</a>
            </Link>
        </button>
    </div>
}

export default Button;