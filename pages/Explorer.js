import Button from "../components/button"
import Header from "../components/Header"
import Joker from '../components/Joker'
import Head from 'next/head'
import styles from './explorer.module.css'
import Footer from '../components/Footer'


export default function Explorer() {
    return (
        <div >
            <Head>
                <title>Explorer</title>
            </Head>
            <Header />
            <div className={styles.myname}>
            <Joker />
            </div>
            <div className={styles.btn1}>
            <Button
                route='/Slides'
                name='Back'
            />
            </div>
            <div className={styles.btn2}>
            <Button
                route='/About'
                name='Next'
            />
            </div>
            <Footer />
        </div>
    )
}
