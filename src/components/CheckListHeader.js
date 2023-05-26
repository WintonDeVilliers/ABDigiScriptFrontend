import styles from '../styles/Scripts.module.css';
import Link from 'next/link';

export default function CheckListHeader() {
  return (
    <>
        <div className={styles.header}>
         <img src="africanbank.svg" alt="Pichere" />
        <nav className={styles.csnavbar}>
              <div className={styles.dropdown}>
          <Link  href="#OPEN">MENU</Link>
          <div className={styles.dropdown_content}>
              <Link href="/">Home Page</Link>
              <Link href="/products">Products</Link>
              <Link href="/knowyourstory">Know Your Story</Link>
              {/* <Link href="/future_feature">Future Thingz</Link> */}
          </div>
          </div>
          <a href="/call_scripts" className={styles.navigation_item} >CALL-SCRIPTS</a>
          <a href="/products" className={styles.navigation_item} >PRODUCTS</a>
          <a href="" className={styles.navigation_item} >NOTICE BOARD</a>   
          {/* <a href="" className={styles.navigation_item} >MISC</a>    */}
        </nav>
        </div>
    </>


        
  )
}
