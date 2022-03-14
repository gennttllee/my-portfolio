
import styles from '../styles/Home.module.css'
import Button from '../components/button'
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  const [name, setName] = useState('')
  const clickMe = (event) => {
    setName(event.target.value)
  }

  const [gender, setGender] = useState('')
  const clickGender = (event) => {
    setGender(event.target.value)
  }

  const [people, setPeople] = useState('');
  const handleClick = () => {
    if (gender === 'male') {
      setPeople(`Hi Mr ${name}  welcome to my portfolio website my name is Mark Williams, i am a programmer and a web developer `)
      document.getElementById('divers').style.display = 'none';
      document.getElementById('dave').style.display = 'block'
    } else if (gender === 'female') {
      setPeople(`Hi Mrs ${name} welcome to my portfolio website my name is Mark Williams, i am a programmer and a web developer`)
      document.getElementById('divers').style.display = 'none';
      document.getElementById('dave').style.display = 'block'
    } else { setPeople(` Input error please try again`) }
  }

  return (
    <div  className={styles.main_page}>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={styles.diver}>{people} </h1>
      <div className={styles.main_div} id='divers' >
        <input className={styles.input1} type='text' onChange={clickMe} placeholder='First name' value={name} ></input>
        <input className={styles.input2} type='text' onChange={clickGender} placeholder='Gender' value={gender} ></input>
        <button className={styles.btn} onClick={handleClick}>Submit</button>
      </div>
      <div className={styles.davina} id='dave'>
        <Button
          route='/Slides'
          name="Next"
        />
      </div>
    </div>
  )
}