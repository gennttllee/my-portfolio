import styles from './footer.module.css'


const Footer =()=>{
    const d = new Date();
    let year = d.getUTCFullYear();
    return <div className={styles.main_comp}>
        <h1 className={styles.h1}>
            <span>Mark</span>
            <span className={styles.spanner}>W</span>
            <span>illiams  Copyright @{year}</span>
        </h1>
        <a className={styles.link1} href=' https://wa.me/08108456793'>  For more enquires click here to quickly chat with us</a>
    </div>
}
export default Footer;