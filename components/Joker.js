import Button from "./button"
import { useState } from "react";
import styles from './joker.module.css'

const Joker = () => {
    const [mark, setMark] = useState('Click below to randomly generate quotes from the legendary rapper KANYE WEST');
    let setLoading = true
    const fetchData = async () => {
        if (setLoading) {
            setMark('Is Loading')
        }
        const req = await fetch('https://api.kanye.rest');
        const newData = await req.json();
        setLoading = false;
        return setMark(newData.quote);
    };
    const clicked = (event) => {
        event.preventDefault();
        fetchData();
    };
    return <div className={styles.second_page}>
        <h2 className={styles.header2}>{mark}</h2>
        <Button
            route=''
            name='search'
            click={clicked}
        />
    </div>
}

export default Joker;