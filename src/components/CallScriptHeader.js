import styles from '../styles/Scripts.module.css';
import Link from 'next/link';

export default function CallScriptHeader() {
  return (
    <div className={styles.csnavbar}>
      <div className={styles.dropdown}>
          <Link  href="#OPEN">MENU</Link>
          <div className={styles.dropdown_content}>
              <Link href="/">Home Page</Link>
              <Link href="/products">Products</Link>
              <Link href="/checklist">Check-List</Link>
              <Link href="/knowyourstory">Know Your Story</Link>
              {/* <Link href="/future_feature">Future Thingz</Link> */}
          </div>
      </div>
      <div className={styles.dropdown}>
          <Link  href="#OPEN">CALL-SCRIPTS</Link>
          <div className={styles.dropdown_content}>
              <Link href="/#">SALES OutBound</Link>
              <Link href="/#">SALES InBound</Link>
          </div>
      </div>
        <Link href="#OPEN">CALL-OPEN</Link>
        <Link href="#APPSTART">APP-START</Link>
        <Link href="#APPOUTCOME">APP-OUTCOME</Link>
        <Link href="#CLOSEOUT">CLOSE-OUT</Link>
      </div>
  )
}
