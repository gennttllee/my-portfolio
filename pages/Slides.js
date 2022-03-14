import Header from '../components/Header'
import Firstsection from '../components/Firstsection'
import Secondsection from '../components/Secondsection'
import styles from '../pages/slides.module.css'
import contacts from '../components/contacts.json'
import Button from '../components/button'
import Head from 'next/head'
import Footer from '../components/Footer'

export default function Slides(props) {
    return (
        <div className={styles.university}>
            <Head>
                <title>Slides</title>
            </Head>
            <Header />
            <div className={styles.myname}>
            <Firstsection />
            </div>
            {contacts.map(contact => {
                return <Secondsection
                    key={contact.id}
                    image={contact.image}
                    heady={contact.heady3}
                    para={contact.para1}
                />
            })}
            <div className={styles.btn2}>
            <Button
                route='/Explorer'
                name="Next"
            />
            </div>
            <Footer />
        </div>
    )
}
