// import styles from '../styles/Header.module.css';
import styles from '../styles/Scripts.module.css';


export default function HomePageHeader(){
    return(
        <div className={styles.header}>
          <nav className={styles.csnavbar}>
            <a href="/call_scripts" className={styles.navigation_item} >SCRIPTS</a>
            <a href="/products" className={styles.navigation_item} >PRODUCTS</a>
            <a href="/checklist" className={styles.navigation_item} >CHECKLIST</a>
            <a href="/knowyourstory" className={styles.navigation_item} >SUPPORT</a>
            <a href="" className={styles.navigation_item} >NOTICE-BOARD</a>
            {/* <a href="" className={styles.navigation_item} >MISC</a>    */}
          <img className={styles.csnav_img} src="africanbank.svg" alt="Pichere" />
          </nav>
       </div>
    )
}