import styles from './header.module.css'
import Link from 'next/link';


const Header = () => {
    function myFunction() {
        var x = document.getElementById("mydiv");
        if (x.className === styles.main_container) {
            x.className = styles.responsive;
        } else {
            x.className = styles.main_container;
        }
    }
    return (
        <div className={styles.main_container} id='mydiv'>
            <h1 className={styles.first_h}>
                <span>Mark</span>
                <span className={styles.spanner}>W</span>
                <span>illiams</span>
            </h1>
            <ul className={styles.list_container}>
                <li className={styles.list_items}>
                    <Link href='/Slides'>
                        <a >Home</a>
                    </Link>
                </li>
                <li className={styles.list_items}>
                    <Link href='/Explorer'>
                        <a >Explore</a>
                    </Link>
                </li>
                <li className={styles.list_items}>
                    <Link href='/About'>
                        <a >About</a>
                    </Link>
                </li>
            </ul>
            <button onClick={myFunction} className={styles.navbar}>
                <span className="material-icons">menu</span>
            </button>
        </div>
    )
}

export default Header;