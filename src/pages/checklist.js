import Footer from "@/components/Footer"
// import styles from '../styles/Home.module.css';
import CheckListHeader from "@/components/CheckListHeader"
import VoiceToText from "@/components/VoiceToText";
import styles from "../styles/CheckListTable.module.css";

export default function Checklist() {
  return (
    <>
      <div >
        <CheckListHeader />
        <div className={styles.open_section}>
            <h1 className={styles.headline}>
          <mark className={styles.mark}>COMPLIANCE CHECK LIST</mark>
          </h1>
        </div>
        
        <div className={styles.table_container}>
          <div className={styles.table_backdrop}>
            Back drop
            {/* TABLE HEADINGS */}
            <div className={styles.table}>
              <div className={styles.header}> <h4>Compliance Statement</h4></div>
              <div className={styles.header}> <h4>Alert Level</h4></div>
              <div className={styles.header}> <h4>Attempt Rating</h4></div>
            </div>
            {/* ROWS */}
              <div className={styles.table}>
                <div className={styles.row}>
                {/* COLUMNS */}
                  <div className={styles.col1}>we put regulatory statement here we put regulatory statement here we put here we put regulatory statement here</div>

               </div>

                <div className={styles.row}>
                {/* COLUMNS */}
                  <div className={styles.red_alert}><h6>RED ALERT</h6></div>
               </div>

                <div className={styles.row}>
                {/* COLUMNS */}
                  <div className={styles.col3}>we put regulatory statement here we put regfsddfsddfssfdsfsdfsdfdssulatory statement here we put here we put regulatory statement here</div>
               </div>
             </div>
            {/* <div className={styles.table}>
                <div className={styles.row}> */}
                {/* COLUMNS */}
                  {/* <div className={styles.col1}>we put regulatory statement here we put regulatory statement here we put here we put regulatory statement here</div>
                  <div className={styles.col2}>COL2</div>
                  <div className={styles.col3}>COL3</div>
               </div>
            </div> */}

            {/* <div className={styles.table}>
                <div className={styles.row}> */}
                {/* COLUMNS */}
                  {/* <div className={styles.col1}>we put regulatory statement here we put regulatory statement here we put here we put regulatory statement here</div>
                  <div className={styles.col2}>COL2</div>
                  <div className={styles.col3}>COL3</div>
               </div>
            </div> */}


          </div>
            
        </div>
          
      </div>
    
   </>



  )
}
