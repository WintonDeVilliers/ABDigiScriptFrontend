// import styles from '../styles/Header.module.css';
import styles from '../styles/Scripts.module.css';


export default function Header(){
    return(
        <div className={styles.header}>
         <img src="africanbank.svg" alt="Pichere" />
        <nav className={styles.csnavbar}>
          <a href="/call_scripts" className={styles.navigation_item} >CALL-SCRIPTS</a>
          <a href="/products" className={styles.navigation_item} >PRODUCTS</a>
          <a href="" className={styles.navigation_item} >POLICIES</a>
          <a href="" className={styles.navigation_item} >NOTICE BOARD</a>   
          <a href="" className={styles.navigation_item} >MISC</a>   
        </nav>
        </div>
    )
}