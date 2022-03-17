
import styles from '../styles/Home.module.css'
import Button from '../components/button'
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  const [name, setName] = useState('')
  const clickMe = (event) => {
    setName(event.target.value)
  }

  let meme;
  const clicker = (event) => {
    meme = event.target.value
  }

  let memes;
  const clickers = (event) => {
    memes = event.target.value
  }

  const [people, setPeople] = useState('');
  const handleClick = () => {
    if (meme == 'male') {
      setPeople(`Hi Mr ${name.toUpperCase()}  welcome to my portfolio website my name is Mark Williams, i am a programmer and a web developer `)
      document.getElementById('divers').style.display = 'none';
      document.getElementById('dave').style.display = 'block';
    } else if (memes == 'female') {
      setPeople(`Hi Mrs ${name.toUpperCase()} welcome to my portfolio website my name is Mark Williams, i am a programmer and a web developer`)
      document.getElementById('divers').style.display = 'none';
      document.getElementById('dave').style.display = 'block';
    }
  }

  return (
    <div className={styles.main_page}>
      <Head>
        <title>Home</title>
      </Head>
      <h1 id='h1' className={styles.diver}>{people} </h1>
      <div className={styles.main_div} id='divers' >
        <input className={styles.input1} type='text' onChange={clickMe} placeholder='First name' value={name} ></input>
        <input className={styles.radio1} onClick={clicker} type='radio' name='gender' value='male'></input>
        <label className={styles.male_label}>male</label>
        <input className={styles.radio2} onClick={clickers} type='radio' name='gender' value='female'></input>
        <label className={styles.female_label}>female</label>
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