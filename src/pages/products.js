import styles from '../styles/Scripts.module.css'
import Link from 'next/link'


export default function Products(){

    return(
 
        <>

      <div className={styles.csnavbar}>
      
      <div className={styles.dropdown}>

          <Link  href="#OPEN">MENU</Link>

          <div className={styles.dropdown_content}>
              <Link href="/">Home Page</Link>
              <Link href="/call_scripts">Call Scripts</Link>
              <Link href="/future_feature">Future-Feature</Link>
              <Link href="#">XXX</Link>
          </div>
      </div>
        <Link href="#OPEN">LOANS</Link>
        <Link href="#CREDITCARD">Credit-Card</Link>
        <Link href="#INVESTMENTS">Investments</Link>
      </div>
        <div className={styles.open_section}></div>
            <h1 className={styles.headline}>LOAN PRODUCTS</h1>
            <div className={styles.cards}>
                <div className={styles.card}>
                <h1>Personal Loan</h1>
                <ul>
                <li>Personal Loans Up To R350 000</li>
                <br/>
                <li>We deposit your Loan straight into your own secure MyWorld account.</li>
                <br/>
                <li>You can choose to repay your loan over 7 to 72 months</li>
                <br/>
                <li>You know exactly how much you will be repaying each month</li>
                <br/>
                <li>You can choose to apply online, over the phone or you can choose to visit your nearest branch.</li>
                <br/>
                </ul>
                
        </div>

        <div className={styles.card}>
                <h1>Consolidation Loan</h1>
                <ul>
                <li>Lock interest on your loans with a fixed interest rate and less fees on one loan repayment.</li>
                <br />
                <li>Consolidation Loan Up To R350 000</li>
                <br />
                <li>Improve your cash flow, repayment terms from 12 to 72 months.</li>
                <br />
                <li>No settlement quotes are required.  Proof of payment that your loans have been settled.</li>
                <br />
                <li>We deposit your Loan straight into your secure own MyWorld account.</li>
                <br />
                <li>You can choose to repay your loan over 7 to 72 months.</li>
                <br />
                <li>You know exactly how much you will be repaying each month.</li>
                <br />
                <li>You can choose to apply online, over the phone or you can choose to visit your nearest branch.</li>
                <br />
                </ul>
        </div>

                <div className={styles.card}>
                <h1>12% Interest Loan</h1>
                <ul>
                <li>Improve your cash flow, repayment terms from 9 to 24 months.</li>
                <br />
                <li>This allows you to budget accurately and know exactly how much you will be repaying from month to month</li>
                <br />
                <li>You can choose to apply online, over the phone or you can choose to visit your nearest branch.</li>
                <br />
                <li>Your 12% Loan will be deposited straight into your bank account.</li>
                <br />
                <li>We deposit your Loan straight into your secure own MyWorld account.</li>
    
                <br />
                </ul>
        </div>

        </div>

        <div className={styles.open_section}>
            <h2 className={styles.headline}>Credit Card</h2>
            <div className={styles.cards}>
            <div className={styles.card}>
            <h2>BLACK CREDIT CARD | FEATURES AND BENEFITS</h2>
            <p>Your African Bank Credit Card allows you more convenience and peace of mind with the following features:</p>
            <ul>
            <li>Your personalised embossed Card is issued instantly at any African Bank Branch.</li>
            <li>Accepted globally at all merchants and ATM's displaying the Visa logo.</li>
            <li>Using your Card is safer than carrying cash.</li>
            <li>Simply Tap, Dip or Swipe, then enter your PIN to complete any transaction.</li>
            <li>Online (Card Not Present) transactions are secure with participating merchants.<br /> 
            An OTP (One Time PIN) will be sent to the cardholder to authorise the transaction.</li>
            <li>Cash withdrawals at POS (Point of Sale, or till points) at participating merchants,<br />
             for example, Checkers, Shoprite, Spar and Pick n Pay.</li>
            <li>Free SMS notifications on all successful transactions.</li>
            <li>Set your own personalised transaction limits.<br /> 
             (If you have not set your personalised limits,the African Bank discretionary default limits will apply).</li>

             <li>Up to 62 days interest-free credit on POS and online purchases, if you settle your outstanding balance in full by the due date.</li>
            </ul>
        </div>

        <div className={styles.card}>   

            <br />

            <p>Set your own personalised transaction limits. (If you have not set your personalised limits, the African Bank discretionary default limits will apply).
            Up to 62 days interest-free credit on POS and online purchases, if you settle your outstanding balance in full by the due date.
            Customers earn interest on a positive balance.
            For peace of mind to cover life’s unexpected insurable events, Credit Life insurance is required.</p>
                    <h2>CREDIT APPLICATION PROCESS:</h2>
            <ul>
                <li>        
            Step 1:
            The application process includes a request that you provide
            African Bank with all information about your monthly income and<br />
            expenses so that the bank can determine whether you can afford
            the loan.
                </li>
            <br />
                <li>
            Step 2:
            Our consultants use the above information along with information
            from the credit bureau to analyse your monthly expenses and<br />
            calculate the instalment you can afford to pay.<br /> We want to make
            sure you do not experience financial difficulty while repaying your
            loan.
                </li>
            </ul>
            <p>
            If your application for credit is unsuccessful, you may ask for written reasons
            as to why your application was declined. If your credit application is declined
            because of information recorded on the credit bureau, African Bank will
            provide you with the details and contact information that will enable you to
            make an enquiry at the credit bureau.
            If you fail to inform African Bank of your inability to pay the instalments or
            if you provide incorrect information, you may not be fully protected by the
            NCA (National Credit Act 34 of 2005).
            </p>
            </div>
            </div>
        </div> 

        </>
    )
}