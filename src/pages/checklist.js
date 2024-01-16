import styles from "../styles/CheckListPlain.module.css";
import Link from "next/link";
import CheckListHeader from "../components/CheckListHeader";
export default function Checklist() {
  return (
    <>
      {/* NAVIGATION BAR */}

      <CheckListHeader />
      {/* ################### */}
      <div id="FIRST-CALL" className={styles.open_section}>
        <h1 className={styles.headline}>
          <mark className={styles.mark}>FIRST-CALL CHECK LIST</mark>
        </h1>
      </div>
      <div className={styles.table_section}>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th className=""></th>
                <th className={styles.row_name}>COMPLIANCE TOPIC</th>
                <th className={styles.row_job}>COMPLIANCE STATEMENT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic}>Regulatory Statement</td>
                <td className={styles.statement}>
                  Before we continue (Customer name), Please note that African
                  Bank is an authorised Financial Services and registered Credit
                  Provider, it holds Professional Indemnity and Fidelity
                  Insurance Cover. All our calls are recorded for quality and
                  security purposes. I am a registered representative /
                  Representative under Supervision authorised to sell Long Term
                  Insurance (funeral Policies & credit life) including Short-
                  and Long-term deposits.
                </td>
              </tr>

              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic}>Processing Consent</td>
                <td className={styles.statement}>
                  Do you give African bank permission to process and share your
                  Personal information with the Credit Bureau and the
                  underwriter (Guardrisk)? A clear Yes is required.
                </td>
              </tr>

              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic}>ID & V Intersekt</td>
                <td className={styles.statement}>
                  ID number, Full name & surname and Cell-phone number. Launch
                  Intersekt authentication / Internal Questions. – same process
                  on a follow up call
                </td>
              </tr>

              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic}>Marketing Consent</td>
                <td className={styles.statement}>
                  Can we inform you of African Bank offers via marketing
                  campaigns? (Follow process as per SOP)
                </td>
              </tr>

              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic}>Compliance Q's</td>
                <td className={styles.statement}>
                  Are you under Administration, Debt counselling &
                  Sequestration? Do you give permission to perform a credit
                  check?
                </td>
              </tr>

              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic}>Banking Details</td>
                <td className={styles.statement}>
                  Customer to Confirm the Bank name, account type & Consultants
                  to confirm the first 3 digits; Customer confirms the last 3
                  digits / account number digits in full. Online Banks statement
                  permission (OBS) and SMS notification
                </td>
              </tr>

              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic}>Expense Declaration</td>
                <td className={styles.statement}>
                  It is important that you FULLY, ACCURATELY AND TRUTHFULLY
                  disclose your total expenses to me on the call because it will
                  ensure that you can afford the credit you are applying for.
                  Please do not include medicalaid contributions reflecting on
                  your payslip, repayments on loans and credit e.g., Credit
                  cards, clothing accounts and bonds.
                </td>
              </tr>

              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic}>Monthly Expenses</td>
                <td className={styles.statement}>
                  Confirm Customer’s total living Expenses. (Breakdown expenses
                  as per scripts for customers understanding & confirmation)
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic}>MyWorld Account</td>
                <td className={styles.statement}>
                  Inform customer the Acc is opened, Mention the Acc features –
                  Mention Number of accounts - Mention pockets – Interest rates
                  on different accounts – salary switch & Online Banking (Other
                  product features can be mentioned)
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic}>Offer Presentation</td>
                <td className={styles.statement}>
                  Discuss all offers the customers qualified for (Amounts,
                  Payment term, Interest rate, and monthly Instalment) starting
                  with the offer matching the customer’s need. Inform customer
                  that offer is PROVISIONAL
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic}>Overdraft</td>
                <td className={styles.statement}>
                  Overdraft facility becomes active once you switch your salary
                  into your MyWORLD account OR by depositing 70% of your Net
                  Salary with minimum monthly repayment is 5% of outstanding
                  balance. (if customer selects overdraft mention that loan
                  offers come with Credit Life)
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic}>Tech Credit & Value Add</td>
                <td className={styles.statement}>
                  Explain Tech credit option as standalone product (refer to
                  brochure, mention 12% interest rate & 24 months term – explain
                  that device needs to beselected). Explain automatic min R500
                  disbursement to MW. Explain value added tech deals on loans.
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic}>Credit Life</td>
                <td className={styles.statement}>
                  Please note our product comes with credit life insurance which
                  is underwritten by Guard Risk. It covers the outstanding
                  balance of the loan in the event of your Death, Permanent
                  disability. It covers 12 monthly instalments in the event of
                  Retrenchment or Temporary Disability. The waiting period is 90
                  days from the day of disbursement (for all benefits). You may
                  submit your own credit life insurance if you have one.
                  However, it is subjected to AB approval. Will you be taking
                  our credit life insurance, or will you be submitting your own?
                </td>
              </tr>

              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic}>Bureau Info</td>
                <td className={styles.statement}>
                  Confirm account/s information on the bureau with the customer
                  (check for other creditors not mentioned)
                </td>
              </tr>

              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic}>Info Declaration</td>
                <td className={styles.statement}>
                  Do you declare that the information provided is true and
                  correct and can be used to determine your credit
                  affordability?
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic}>Close Out Protocol</td>
                <td className={styles.statement}>
                  Digital Migration, Fraud Alert & Survey
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ##################### REAL OFFER TABLE ####################################### */}

      {/* <div id='REAL-OFFER' className={styles.open_section}>
        <h1 className={styles.headline}>
          <mark className={styles.mark}>REAL OFFER CHECK LIST</mark>
        </h1>
      </div>
      <div className={styles.table_section}>
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
                  African Bank is an authorized Financial Services and Credit                        
                  Provider.
                  It holds Professional Indemnity and Fidelity Insurance Cover, and                   
                  as a standard procedure
                  all our calls are recorded for quality and security purposes.
                  I am a Representative working under supervision for Long Term                       
                  Insurance,
                  including short-term and long-term deposits. MORE WORDS</td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td>Processing Consent</td>
                <td>FHFJKFHJKFHFJKFHJKFHFJK</td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td>ID & V Intersekt</td>
                <td> 
                  JKLHKLJGKLGJGKGJGLGJKLG
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td>Marketing Consent</td>
                <td>  
                  FHJFKHFJKFHFJK
                </td>
              </tr>
{/* 


              <tr>
                <td className={styles.alert_red}></td>
                <td>ID & V Intersekt</td>
                <td>                  
                </td>
              </tr>

              <tr>
                <td className={styles.alert_red}></td>
                <td>Marketing Consent</td>
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td>Compliance Q's</td>
                <td>                  
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td>Banking Details</td>
                <td>
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td>Expense Declaration</td>
                <td>
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td>Monthly Expenses</td>
                <td>
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td>MyWorld Account</td>
                <td>
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td>Offer Presentation</td>
                <td>
     

                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td>Overdraft</td>
                <td>
       

                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td>Tech Credit & Value Add</td>
                <td>
        

                </td>
              </tr>
                <tr>
                <td className={styles.alert_red}></td>
                <td>Credit Life</td>
                <td>
      


                </td>
              </tr>

              <tr>
                <td className={styles.alert_red}></td>
                <td>Bureau Info</td>
                <td>
                </td>
              </tr>
                <tr>
                <td className={styles.alert_red}></td>
                <td>Info Declaration</td>
                <td>
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td>Close Out Protocol</td>
                <td>

                </td>
              </tr> 

            
            </tbody>              
          </table>
        </div>
      </div> */}

      <div id="FUNERAL-COVER" className={styles.open_section}>
        <h1 className={styles.headline}>
          <mark className={styles.mark}> FUNERAL COVER CHECK LIST</mark>
        </h1>
      </div>
      <div className={styles.table_section}>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th className=""></th>
                <th className={styles.row_name}>COMPLIANCE TOPIC</th>
                <th className={styles.row_job}>COMPLIANCE STATEMENT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic_funeral}>Regulatory Statement</td>
                <td className={styles.statement}>
                  Before we continue (Customer name), Please note that African
                  Bank is an authorised Financial Services and registered Credit
                  Provider, it holds Professional Indemnity and Fidelity
                  Insurance Cover. All our calls are recorded for quality and
                  security purposes. I am a registered representative /
                  Representative under Supervision authorised to sell Long Term
                  Insurance (funeral Policies & credit life) including Short-
                  and Long-term deposits.
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic_funeral}>ID & V Intersekt</td>
                <td className={styles.statement}>
                  ID number, Full name & surname and Cell-phone number. Launch
                  Intersekt authentication / Internal Questions. – same process
                  on a follow up call
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic_funeral}>
                  Mention the Underwritter
                </td>
                <td className={styles.statement}>
                  The Funeral policy is Underwritten by Guardrisk Life Limited
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic_funeral}>Processing Consent</td>
                <td className={styles.statement}>
                  Do you give African bank permission to process and share your
                  Personal information with the Credit Bureau and the
                  underwriter (Guardrisk)? A clear Yes is required.
                </td>
              </tr>

              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic_funeral}>Policy Information</td>
                <td className={styles.statement}>
                  Misrepresentation, non-disclosure, and fraud certain
                  representations are considered to be material for the purposes
                  of assessing the risks. If any such representations are
                  incorrect or incomplete, Guardrisk Life LTD shall be entitled
                  to cancel this African Bank Funeral Plan and repudiate any
                  liability or claim in terms of material for purpose. Do you
                  understand the above ? Get a clear "Yes".
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic_funeral}>
                  Cover Amounts & Premiums
                </td>
                <td className={styles.statement}>
                  Mention different cover amounts & premiums amounts. Customer
                  to selects the required policy and the consultant to mention
                  the correct premium amount.
                </td>
              </tr>

              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic_funeral}>Policy Explanation</td>
                <td className={styles.statement}>
                  Family cover- Explain who qualifies as a spuse and who
                  qualifies as a child. Extended family member- confirm the
                  relationship & cover amounts (Ensure correct cover as per age
                  ristrictions)
                </td>
              </tr>

              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic_funeral}>Policy Explanation</td>
                <td className={styles.statement}>
                  ID Number, Name & surname, Contact number and Relations • When
                  customers do not have the ID number, they can continue and
                  complete the application and provide the customer with Funeral
                  customer service number to call and provide the full ID number
                  (0860 000 975) or Funeralplan@africanbank.co.za
                </td>
              </tr>

              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic_funeral}>Waiting Periods</td>
                <td className={styles.statement}>
                  Discuss the waiting period for the new people added on the
                  policy (Natural cause death, Accidental death & suicidal
                  death. Mention when does the waiting period commence
                </td>
              </tr>

              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic_funeral}>Premiums Payable</td>
                <td className={styles.statement}>
                  Confirm the premium payable (For the selected policy)
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic_funeral}>Debit Order Details</td>
                <td className={styles.statement}>
                  Customer to confirm the account number. Confirm Debit order
                  date & debit amount & frequency of the payment. Inform
                  customer about Debit order authorisation mandate.
                </td>
              </tr>

              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic_funeral}>
                  Failure to Pay Premiums
                </td>
                <td className={styles.statement}>
                  If customer fails to pay the first premium – They are given a
                  60 day’s grace period for premium collection failure to pay
                  all 3 premiums policy lapses. if Customer fails to pay 3
                  consecutive premiums Policy lapses (Not taken Up). Customer
                  has 6 months to reinstate the Policy. Reinstatement within the
                  1st two months of policy lapsing there are no new waiting
                  periods. Reinstatement after the 1st two months there will be
                  two months waiting period added to the initial waiting
                  period.(not taken up)
                </td>
              </tr>

              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic_funeral}>Cooling Off Period</td>
                <td className={styles.statement}>
                  The Main member has 31 days from commencement date to cancel
                  the policy and receive a refund of the premium paid, provided
                  no Claim has arisen or any Benefit paid.
                </td>
              </tr>

              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic_funeral}>Policy Replacement</td>
                <td className={styles.statement}>
                  The Main member has 31 days from commencement date to cancel
                  the policy and receive a refund of the premium paid, provided
                  no Claim has arisen or any Benefit paid.
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic_funeral}>Policy Replacement</td>
                <td className={styles.statement}>
                  (Customer Name) by taking this policy will you be cancelling
                  or replacing any policy with another service provider? Get an
                  answer if “yes, need to inform the customer to send us the
                  policy documents and cancelation letter. The documents will be
                  assessed, if the waiting has been completed with the service
                  provider, African Bank will waive your waiting period.
                </td>
              </tr>
              <tr>
                <td className={styles.alert_red}></td>
                <td className={styles.topic_funeral}>
                  Terms & Conditions - Policy Documents
                </td>
                <td className={styles.statement}>
                  Ask the Customer If they accept the Terms and Condition of the
                  Funeral Policy (Get a Clear Yes) Confirm the preferred method
                  of sending policy documents to the customer
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
