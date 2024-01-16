// import styles from '../styles/Header.module.css';
import Link from 'next/link';
import styles from '../styles/Scripts.module.css';


export default function HomePageHeader(){
    return(
        <div>
          <nav className={styles.csnavbar}>
          {/* SALES MENU */}
            <div className={styles.dropdown}>
              <div className={styles.dropbtn}>
                <Link href="/">SCRIPTS</Link>
              </div>
              <div className={styles.dropdown_content}>
                <Link href="/first_call_scripts">FIRST CALL</Link>
                <Link href="/real_offer_script">REAL OFFER</Link>
                <Link href="/funeral_cover_script">FUNERAL</Link>
              </div>
            </div>
          {/* SALES MENU */}
          {/* PRODUCTS MENU */}
            <div className={styles.dropdown}>
              <div className={styles.dropbtn}>
                <Link href="/products">PRODUCTS</Link>
              </div>
              <div className={styles.dropdown_content}>
                <Link href="/products#LOANS">LOANS</Link>
                <Link href="/products#CREDITCARD">CREDIT CARD</Link>
                <Link href="/products#FUNERAL">FUNERAL</Link>
                <Link href="/products#TECHDEALS">TECH DEALS</Link>
              </div>
            </div>
            {/* PRODUCTS MENU */}
            <div className={styles.dropdown}>
              <div className={styles.dropbtn}>
                <Link href="/checklist">CHECKLIST</Link>
              </div>
              <div className={styles.dropdown_content}>
                <Link href="/checklist">SALES CHECKLIST</Link>
                {/* <Link href="/">REAL OFFER CHECKLIST</Link> */}
                <Link href="/checklist#FUNERAL-COVER">FUNERAL CHECKLIST</Link>
              </div>
            </div>
            <a href="/knowyourstory" className={styles.navigation_item} >SUPPORT</a>
          <img className={styles.csnav_img} src="africanbank.svg" alt="Pichere" />
          </nav>
       </div>
    )
}











