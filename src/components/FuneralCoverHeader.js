import styles from '../styles/Scripts.module.css';
import Link from 'next/link';

export default function FuneralCoverHeader() {
  return (
      <div className={styles.csnavbar}>
        <div className={styles.dropdown}>
          <div className={styles.dropbtn}>
            <Link href={""}>MENU</Link>
          </div>
          <div className={styles.dropdown_content}>
                  <Link href="/">Home Page</Link>
                  <Link href="/products">Products</Link>
                  <Link href="/checklist">Check-List</Link>
          </div>
          </div>
           <div className={styles.dropdown}>
          <div className={styles.dropbtn}>
            <Link  href="#OPEN">SCRIPTS</Link>
          </div>
              <div className={styles.dropdown_content}>
                  <Link href="/first_call_scripts">FIRST CALL</Link>
                  <Link href="/real_offer_script">REAL OFFER</Link>
              </div>
      </div>
            <Link href="#OPEN">INTRO</Link>
            <Link href="#APPSTART">CAPTURE-DETAILS</Link>
            <Link href="#CLOSEOUT">CLOSE-OUT</Link>
            <img className={styles.csnav_img} src="africanbank.svg" alt="Pichere" />
        </div>
  )
}
