import styles from "../styles/Scripts.module.css";
import Link from "next/link";

export default function ProductPageHeader() {
  return (
    <div className={styles.csnavbar}>
      <div className={styles.dropdown}>
        <div className={styles.dropbtn}>
          <Link href="#">MENU</Link>
        </div>
        <div className={styles.dropdown_content}>
          <Link href="/">Home Page</Link>
          <Link href="/first_call_scripts">Call Scripts</Link>
          <Link href="/checklist">Check-List</Link>
        </div>
      </div>
      <Link href="#LOANS">LOANS</Link>
      <Link href="#CREDITCARD">Credit-Card</Link>
      <Link href="#FUNERAL">Funeral</Link>
      <Link href="#TECHDEALS">Tech Deals</Link>
      <img className={styles.csnav_img} src="africanbank.svg" alt="Pichere" />
    </div>
  );
}
