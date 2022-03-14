import styles from './header.module.css'
import Link from 'next/link';
import Head from 'next/head'


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
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            </Head>
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