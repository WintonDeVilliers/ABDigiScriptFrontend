import styles from "../styles/Scripts.module.css";
import Link from "next/link";

export default function RealOfferHeader() {
  return (
    <div className={styles.csnavbar}>
      <div className={styles.dropdown}>
        <div className={styles.dropbtn}>
          <Link href="#OPEN">MENU</Link>
        </div>
        <div className={styles.dropdown_content}>
          <Link href="/">Home Page</Link>
          <Link href="/products">Products</Link>
          <Link href="/checklist">Check-List</Link>
        </div>
      </div>
      <div className={styles.dropdown}>
        <div className={styles.dropbtn}>
          <Link href="#OPEN">SCRIPTS</Link>
        </div>
        <div className={styles.dropdown_content}>
          <Link href="/first_call_scripts">FIRST CALL</Link>

          <Link href="/funeral_cover_script">FUNERAL</Link>
        </div>
      </div>
      <Link href="#OPEN">PRESENTATION</Link>
      <Link href="#APPSTART">CONTRACTING</Link>
      <Link href="#APPOUTCOME">COSTS</Link>
      <Link href="#CLOSEOUT">CLOSE-OUT</Link>
      <img className={styles.csnav_img} src="africanbank.svg" alt="Pichere" />
    </div>
  );
}
