import Head from 'next/head'
import Header from '../components/Header'
import Card from '../components/Card'
import socials from '../components/socials.json'
import Button from '../components/button'
import styles from './about.module.css'
import Footer from '../components/Footer'

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
            </Head>
            <Header />
            <div className={styles.myname}>
                <h1 className={styles.h1}>Below is a list of all my socials created with React.js componenets</h1>
            </div>
            {socials.map(social => {
                return <Card
                    key={social.id}
                    image={social.image}
                    head1={social.heady3}
                    p1={social.para1}
                    link={social.link}
                />
            })}
            <div className={styles.btn1}>
                <Button
                    name ='Back'
                    route ='/Explorer'
                />
            </div>
            <Footer />
        </div>
    )
}