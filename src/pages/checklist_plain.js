// import React from 'react'
// import React, { useState, useEffect } from "react";
// import Footer from "@/components/Footer";
import CheckListHeader from "@/components/CheckListHeader";
import styles from "../styles/CheckListPlain.module.css";


export default function Checklist_Plain() {
  return (
    <>
       <CheckListHeader />
        <div className={styles.open_section}>
          <h1 className={styles.headline}>
            <mark className={styles.mark}>COMPLIANCE CHECK LIST</mark>
          </h1>
        </div>
        <div className={styles.table_section}>
        <h1>FIRST CALL</h1>
          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <th className="">.  .....  .</th>
                  <th className={styles.row_name}>COMPLIANCE TOPIC</th>
                  <th className={styles.row_job}>COMPLIANCE STATEMENT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.alert_red}></td>
                  <td>Regulatory Statement</td>
                  <td>### ### ,
                    African Bank is an authorized Financial Services and Credit Provider.
                    It holds Professional Indemnity and Fidelity Insurance Cover, and as a standard procedure
                    all our calls are recorded for quality and security purposes.
                    I am a Representative working under supervision for Long Term Insurance,
                    including short-term and long-term deposits. MORE WORDS</td>
                </tr>

                <tr>
                  <td className={styles.alert_red}></td>
                  <td>Processing Consent</td>
                  <td>statement here</td>
                </tr>

                <tr>
                  <td className={styles.alert_red}></td>
                  <td>ID & V Intersekt</td>
                  <td>statement here</td>
                </tr>

                <tr>
                  <td className={styles.alert_red}></td>
                  <td>Marketing Consent</td>
                  <td>statement here</td>
                </tr>

                <tr>
                  <td className={styles.alert_red}></td>
                  <td>Compliance Q's</td>
                  <td>statement here</td>
                </tr>

                <tr>
                  <td className={styles.alert_red}></td>
                  <td>Banking Details</td>
                  <td>statement here</td>
                </tr>

                <tr>
                  <td className={styles.alert_red}></td>
                  <td>Expense Declaration</td>
                  <td>statement here</td>
                </tr>

                <tr>
                  <td className={styles.alert_red}></td>
                  <td>Monthly Expenses</td>
                  <td>statement here</td>
                </tr>
                <tr>
                  <td className={styles.alert_red}></td>
                  <td>MyWorld Account</td>
                  <td>statement here</td>
                </tr>
                <tr>
                  <td className={styles.alert_red}></td>
                  <td>Offer Presentation</td>
                  <td>statement here</td>
                </tr>
                <tr>
                  <td className={styles.alert_red}></td>
                  <td>Overdraft</td>
                  <td>statement here</td>
                </tr>
                <tr>
                  <td className={styles.alert_red}></td>
                  <td>Tech Credit & Value Add</td>
                  <td>statement here</td>
                </tr>
                  <tr>
                  <td className={styles.alert_red}></td>
                  <td>Credit Life</td>
                  <td>statement here</td>
                </tr>

                <tr>
                  <td className={styles.alert_red}></td>
                  <td>Bureau Info</td>
                  <td>statement here</td>
                </tr>
                  <tr>
                  <td className={styles.alert_red}></td>
                  <td>Info Declaration</td>
                  <td>statement here</td>
                </tr>
                <tr>
                  <td className={styles.alert_red}></td>
                  <td>Close Out Protocol</td>
                  <td>statement here</td>
                </tr>
              </tbody>              
            </table>
        </div>
        </div>





      {/* <div className={styles.table_section}>
        <h1>FIRST CALL (FUNERAL COVER)</h1>
          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <th className="">ALERT LEVEL</th>
                  <th className={styles.row_name}>COMPLIANCE TOPIC</th>
                  <th className={styles.row_job}>COMPLIANCE STATEMENT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.alert_red}></td>
                  <td>Regulatory Statement</td>
                  <td>### ### ,
                    African Bank is an authorized Financial Services and Credit Provider.
                    It holds Professional Indemnity and Fidelity Insurance Cover, and as a standard procedure
                    all our calls are recorded for quality and security purposes.
                    I am a Representative working under supervision for Long Term Insurance,
                    including short-term and long-term deposits. MORE WORDS</td>
                </tr>

                <tr>
                  <td className={styles.alert_red}></td>
                  <td>Information Processing</td>
                  <td>statement here</td>
                </tr>

                <tr>
                  <td className={styles.alert_red}></td>
                  <td>Debt Control</td>
                  <td>statement here</td>
                </tr>

                <tr>
                  <td className={styles.alert_red}></td>
                  <td>Credit Check</td>
                  <td>statement here</td>
                </tr>

                <tr>
                  <td className={styles.alert_red}></td>
                  <td>0</td>
                  <td>statement here</td>
                </tr>

                <tr>
                  <td className={styles.alert_red}></td>
                  <td>0</td>
                  <td>statement here</td>
                </tr>

                <tr>
                  <td className={styles.alert_red}></td>
                  <td>0</td>
                  <td>statement here</td>
                </tr>

                <tr>
                  <td className={styles.alert_red}></td>
                  <td>0</td>
                  <td>statement here</td>
                </tr>
              </tbody>              
            </table>
        </div>
        </div> */}




      
    </>
  )
}
