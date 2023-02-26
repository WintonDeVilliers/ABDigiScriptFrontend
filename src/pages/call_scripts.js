import styles from '../styles/Scripts.module.css';
import Footer from "@/components/Footer"

import Script from 'next/script'
import Link from 'next/link'





export default function Call_scripts() {
  return (

    <>
    
      {/* NAVIGATION BAR */}
      <div className={styles.csnavbar}>
      <div className={styles.dropdown}>
          <Link  href="#OPEN">MENU</Link>
          <div className={styles.dropdown_content}>
              <Link href="/">Home Page</Link>
              <Link href="/products">Products</Link>
              <Link href="/future_feature">Future Feature</Link>
              <Link href="#">Processes</Link>
          </div>
        </div>
                <div className={styles.dropdown}>
          <Link  href="#OPEN">CALL-SCRIPTS</Link>
          <div className={styles.dropdown_content}>
              <Link href="/">SALES OutBound</Link>
              <Link href="/products">SALES InBound</Link>
          </div>
      </div>
        <Link href="#OPEN">CALL-OPEN</Link>
        <Link href="#APPSTART">APPLICATION-START</Link>
        <Link href="#APPOUTCOME">APPLICATION-OUTCOME</Link>
        <Link href="#CLOSEOUT">CLOSE-OUT</Link>
      </div>
      {/* CALL OPEN SECTION */} 
      <div id="OPEN"className={styles.open_section}>
          <h1 className={styles.headline}>CALL-OPEN</h1>
          {/* *CARD CONATAINER* */}
          {/* <div className={styles.card_content_area}></div> */}
          <div className={styles.cards}>
              {/* *CARDS* */}
              <div className={styles.card}>
                  <h2>Introduction</h2>
                  <p>Good day, may I please speak to **Customer Name?<br />
                  My name is Consultants Name and I am calling you from African Bank.</p>
                  {/* HOOK BUTTONS */}
                   <div>
                    <button className={styles.wrapper}>
                        AB_CLICKWAY_CAMPAIGN
                        <div className={styles.tooltip}>
                        <span>
                        <h5>AB_CLICKWAY_CAMPAIGN</h5>
                        I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                        Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                        imperdiet libero,in condimentum odio mauris sed metus.<br />
                        Nunc pharetra tincidunt<br />
                        ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                        leo vitae dictum euismod.
                        </span>
                        </div>
                    </button>
                  </div>
                  <div>
                      <button className={styles.wrapper}>
                      AB_OMNI_WEB_CAMPAIGN
                      <div className={styles.tooltip}>
                      <span>
                      <h5>AB_OMNI_WEB_CAMPAIGN</h5>
                        I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                        Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                        imperdiet libero,in condimentum odio mauris sed metus.<br />
                        Nunc pharetra tincidunt<br />
                        ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                        leo vitae dictum euismod.
                      </span>
                      </div>
                  </button>
                  </div>
                  <div>
                  <button className={styles.wrapper}>
                      AB_BLUE_LABEL_CAMPAIGN
                      <div className={styles.tooltip}>
                      <span>
                      <h5>AB_BLUE_LABEL_CAMPAIGN</h5>
                        I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                        Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                        imperdiet libero,in condimentum odio mauris sed metus.<br />
                        Nunc pharetra tincidunt<br />
                        ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                        leo vitae dictum euismod.
                      </span>
                      </div>
                  </button>
                  </div>
                  {/* HOOK BUTTONS END */}
                  <p>Customer Name, African Bank would like to invite you
                   to apply for our<br />exciting products
                  such as a personal loan,consolidation loan or a<br /> credit card,
                  and for us to complete the application it might take ±10 minutes</p>
                  <div>
                  <p />
                  <br />
                  <p />
                  <p>Which of these products are you interested in applying for?</p>
                  {/*FREQUENT OBJECTION BUTTON*/}
                  <button className={styles.wrapper}>COMMON OBJECTIONS
                      <span className={styles.tooltip}>
                        <p><b>Objection: I already have a loan...</b></p>
                        <p><b>Response:</b> Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
                        <p><b>Objection: I won't be able to afford another installment</b></p>
                        <p><b>Response:</b> Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
                      </span>
                  </button>
                  {/*FREQUENT OBJECTION BUTTON END*/}
                  </div>
                  <h4>If customer choses Loan <img src="triangle.svg" alt="Pichere" width="24px"/></h4>
                  <p>
                  The Great news is that the loan amount will be paid directly into an African bank account,<br />
                  which means you will have immediate access to the funds once the verifications have been successfully finalized.
                  </p>
                  <h4>If customer choses Credit Card <img src="triangle.svg" alt="Pichere" width="24px"/></h4>
                  <p>If you settle your Credit Card in full by the due date,
                  you will pay no interest on your POS purchases.</p>
              </div>
              {/* ** */}
              <div className={styles.card}>
                  <h2>Pre-Qualifying Questions</h2>

                  <p>**Customer Name Before we start with application could you kindly confirm the following?</p>
                  <ul>
                      <li>Are you permanently employed?</li>
                      <li>Do you receive a payslip?</li>
                      <li>Is your salary paid in your bank account?</li>
                      <li>Are you under administration, sequestration, or debt counselling?</li>
                      <li>Do you give us consent to do a credit check?</li>
                  </ul>
                  <br />
                    <div>
                        <button className={styles.wrapper}>
                            PRE-QUALIFICATION NOT MET
                            <div className={styles.tooltip}>
                            <span>
                            <h5>PRE-QUALIFICATION NOT MET</h5>
                        I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                        Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                        imperdiet libero,in condimentum odio mauris sed metus.<br />
                        Nunc pharetra tincidunt<br />
                        ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                        leo vitae dictum euismod.
                            </span>
                            </div>
                        </button>
                    </div>
                        <h3>Create an expectation </h3>
                        <p>To assist you with your application we will have to confirm the account number where your salary is paid into,
                        may you kindly have your account readily available.</p>
              </div>
              {/* ** */}
              <div className={styles.card}>
                  <h2>Early Digital Migration Preparation</h2>
                  
                    <p>**Customer Name** we are about to start your application,
                    on completion I will give your results.
                    <br />If you provisionally qualify, we will require your documents
                    <br />
                    (ID, Payslip, Bank Statements)  to generate your final offer.
                    </p>
                    <p>To Speed up this process and skip the document queues<br />
                      I recommend that you submit your documents via our : </p>
                    <ol>
                        <li>Website</li>
                        <li>Banking App</li>
                        <li>WhatsApp Banking</li>
                    </ol>
                    <p>Upon receipt of your final offer, you can skip yet another queue
                      by completing your contract on our<br /> Website OR Banking App.
                      I will explain these processes in detail later in this call.</p>
                    <div>
                        <button className={styles.wrapper}>
                            MIGRATION OBJECTION
                            <div className={styles.tooltip}>
                              <span>
                                <h5>MIGRATION OBJECTION</h5>
                                I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                                Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                                imperdiet libero,in condimentum odio mauris sed metus.<br />
                                Nunc pharetra tincidunt<br />
                                ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                                leo vitae dictum euismod.
                              </span>
                            </div>
                        </button>
                        <p />
                    </div>
              </div>
          </div>
      </div>
      {/* CALL OPEN SECTION END */}

      {/* APPLICATION START SECTION */}
      <div id="APPSTART" className={styles.open_section}>
          <h1 className={styles.headline}>APPLICATION START</h1>
          {/* *CARD CONATAINER* */}
          <div className={styles.card_content_area}>
          {/* *CARDS* */}
            <div className={styles.cards}>

            <div className={styles.card}>
                <h2>Customer Authentication</h2>
                <p>*Mr/Mrs/Ms Customer Name*,do you give African Bank the permission to process your personal information ?</p>
                <p>African Bank will share this information with the Credit Bureau <br />as well as our Credit Underwriters Gaurd-Risk. Is this okay with you?</p>
                    <div>
                        <button className={styles.wrapper}>
                              REFUSING INFO PROCESSING
                              <div className={styles.tooltip}>
                                <span>
                                  <h6>REFUSING INFO PROCESSING</h6>
                                  I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                                  Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                                  imperdiet libero,in condimentum odio mauris sed metus.<br />
                                  Nunc pharetra tincidunt<br />
                                  ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                                  leo vitae dictum euismod.
                                </span>
                              </div>
                          </button>
                    </div>
                  <p />
                  <h3>ID & V</h3>
                  <p>Can I please have your Full Names as they appear on your ID/ID Card ?</p>
                  <p>May I please have your Your ID number ?</p>
                  <p>Please confirm your cellphone number ?</p>
                      <div>
                          <button className={styles.wrapper}>
                               REFUSING INFO PROCESSING
                               <div className={styles.tooltip}>
                                <span>
                                  <h6>REFUSING INFO PROCESSING</h6>
                                  I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                                  Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                                  imperdiet libero,in condimentum odio mauris sed metus.<br />
                                  Nunc pharetra tincidunt<br />
                                  ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                                  leo vitae dictum euismod.
                                </span>
                              </div>
                          </button>
                      </div>
                  <h2>Regulatory Statements</h2>
                  <h3>Under Supervision</h3>
                  <p>
                    Before we continue **Customer name**,<br /> 
                    Please note that African Bank is an authorized Financial Services and Credit Provider.<br />
                    It holds Professional Indemnity and Fidelity Insurance Cover, and as a standard procedure<br />
                    all our calls are recorded for quality and security purposes.<br />
                    <b>I am a Representative working under supervision for Long Term Insurance,<br/>
                    including short-term and long-term deposits.</b>
                  </p>
                  <h3>Registered Rep</h3>
                  <p>
                    Before we continue **Customer name**,<br /> 
                    Please note that African Bank is an authorized Financial Services and Credit Provider.<br />
                    It holds Professional Indemnity and Fidelity Insurance Cover, and as a standard procedure<br />
                    all our calls are recorded for quality and security purposes.<br />
                    <b>I am a Registered Representative authorized to sell Long Term Insurance,
                    including short-term and long-term deposits.</b>
                  </p>
                  <p></p>
              </div>
              <div className={styles.card}>
                  <h2>Compliance Questions</h2>
                  <p>**Customer Name**, <br />Are you under administration, sequestration or debt counselling?</p>
                    <div>
                        <button className={styles.wrapper}>
                            EXPLINATION
                            <div className={styles.tooltip}>
                              <span>
                                <h5>EXPLINATION</h5>
                                <h6>Compliance Questions</h6>
                                I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                                Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                                imperdiet libero,in condimentum odio mauris sed metus.<br />
                                Nunc pharetra tincidunt<br />
                                ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                                leo vitae dictum euismod.
                              </span>
                            </div>
                        </button>
                    </div>
                    <div>
                        <button className={styles.wrapper}>
                            CRITERIA NOT MET
                            <div className={styles.tooltip}>
                              <span>
                                <h5>COMPLIANCE QUESTIONS</h5>
                                <h6>CRITERIA NOT MET</h6>
                                I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                                Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                                imperdiet libero,in condimentum odio mauris sed metus.<br />
                                Nunc pharetra tincidunt<br />
                                ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                                leo vitae dictum euismod.
                              </span>
                            </div>
                        </button>
                    </div>
                  <p>Do you give African Bank permission to do a credit check?</p>
                    <div>
                        <button className={styles.wrapper}>
                            EXPLINATION
                            <div className={styles.tooltip}>
                              <span>
                                <h5>EXPLINATION</h5>
                                <h6>Credit Check</h6>
                                I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                                Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                                imperdiet libero,in condimentum odio mauris sed metus.<br />
                                Nunc pharetra tincidunt<br />
                                ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                                leo vitae dictum euismod.
                              </span>
                            </div>
                        </button>
                    </div>
                    <div>
                        <button className={styles.wrapper}>
                            CUSTOMER DECLINE CREDIT CHECK(S)
                            <div className={styles.tooltip}>
                              <span>
                                <h5>CUSTOMER DECLINE CREDIT CHECK</h5>
                                I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                                Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                                imperdiet libero,in condimentum odio mauris sed metus.<br />
                                Nunc pharetra tincidunt<br />
                                ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                                leo vitae dictum euismod.
                              </span>
                            </div>
                        </button>
                    </div>
                  <h2>Banking Details</h2>
                  <p>Please have your account number ready for this part for this part of the process</p>
                  <ul>
                      <li>Kindly provide me with the name of your bank?</li>
                      <li>Is your bank account a cheque or savings account?</li>
                      <li>kindly provide me with your account number?</li>
                  </ul>
                     <div>
                        <button className={styles.wrapper}>
                            BANKING DETAIL(S) OBJECTION
                            <div className={styles.tooltip}>
                              <span>
                                <h5>CUSTOMER DECLINE CREDIT CHECK</h5>
                                I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                                Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                                imperdiet libero,in condimentum odio mauris sed metus.<br />
                                Nunc pharetra tincidunt<br />
                                ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                                leo vitae dictum euismod.
                              </span>
                            </div>
                        </button>
                    </div>
                  <h2>Bank Statements</h2>
                  <p>We will require your bank statements for the application process."<br />
                  To save you time and effort of getting them and as part of our application process,
                  we will request your bank statements from your bank on your behalf. Can we do that for you ?</p>
                    <div>
                        <button className={styles.wrapper}>
                            CLIENT WANTS TO SEND BANK STATEMENTS
                            <div className={styles.tooltip}>
                              <span>
                                <h5>CLIENT WANTS TO SEND BANK STATEMENTS</h5>
                                I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                                Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                                imperdiet libero,in condimentum odio mauris sed metus.<br />
                                Nunc pharetra tincidunt<br />
                                ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                                leo vitae dictum euismod.
                              </span>
                            </div>
                        </button>
                    </div>
                  <p>Please note that you will receive an SMS from your bank notifying you that we are requesting your bank statements.
                  <br />However , this does not mean that we have received it.
                  <br />We are only asking for your Banks permission to access that information. </p>
                  <br />
              </div>
              <div className={styles.card}>
                  <h2>Employer Details</h2>
                  <p><b>Follow screen prompts on OMNI</b></p>
                  <ul>
                      <li>Are you a Persal Employee or Working for a Company?</li>
                      <li>Are You a Full-time ,Part-time or Contract worker</li>
                      <li>When did you start working at **Above Company Name**</li>
                  </ul>
                  <p>Should we need to contact your employers HR, what would be a good time to do so ?</p>
                  <p>Should we need to contact you during Business hours, what would be a good time to do so ?</p>
                      <div>
                          <button className={styles.wrapper}>
                              PERSAL NUMBERS
                              <div className={styles.tooltip}>
                                <span>
                                  <h5>PERSAL NUMBERS</h5>
                                  I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                                  Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                                  imperdiet libero,in condimentum odio mauris sed metus.<br />
                                  Nunc pharetra tincidunt<br />
                                  ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                                  leo vitae dictum euismod.
                                </span>
                              </div>
                          </button>
                      </div>
                      <div>
                          <button className={styles.wrapper}>
                              CONTRACT WORKERS
                              <div className={styles.tooltip}>
                                <span>
                                  <h5>CONTRACT WORKERS</h5>
                                  I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                                  Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                                  imperdiet libero,in condimentum odio mauris sed metus.<br />
                                  Nunc pharetra tincidunt<br />
                                  ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                                  leo vitae dictum euismod.
                                </span>
                              </div>
                          </button>
                      </div>
                  <h2>Income and Expenses</h2>
                  <p>**Customer Name**, we are about to go through your income and monthly expenses.
                  Please note that it is extremly important that you provide the information fully accurately and thruthfully,
                  as this will help ensure you can afford the loan or credit limit you are applying for.</p>
                  <h3>Monthly Income</h3>
                  <ul>
                      <li>How Often do you get paid ?</li>
                      <li>Which date of the month is your salary paid ?</li>
                      <li>Please provide your latest Gross Income as per payslip?</li>
                      <li>What is your Nett salary as per your payslip ?</li>
                  </ul>
                  <h3>Monthly Expenses</h3>
                  <p>Now we will go through your expenses.<br />
                  Here we ask that you <b>do not include</b> medical aid contributions that appear on your payslip.
                  Also do not include repayments on loans, clothing accounts, credit cards or bonds.</p>
                  <p>How much do you spend on total household living expenses?</p>
                      <div>
                          <button className={styles.wrapper}>
                             PROBING QUESTIONS
                              <div className={styles.tooltip}>
                                <span>
                                  <h5>PROBING QUESTIONS</h5>
                                  I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                                  Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                                  imperdiet libero,in condimentum odio mauris sed metus.<br />
                                  Nunc pharetra tincidunt<br />
                                  ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                                  leo vitae dictum euismod.
                                </span>
                              </div>
                          </button>
                      </div>
                  <p>**Customer Name,  your total living expenses are R... is this correct?</p>
                  <h3>Customer Information Declaration</h3>
                  <p>**Customer Name, <b>do you declare that the information</b> you provided <b>is both true and correct</b>, 
                  and can be used to determine whether you can afford the credit you applied for</p>
              </div>
            </div>
            {/* *CARDS END* */}
          </div>
          {/* *CARD CONATAINER END* */}
      </div>


      {/* APPLICATION START SECTION END */}

      {/* APPLICATION OUTCOME SECTION */}
      <div id="APPOUTCOME" className={styles.open_section}>
          <h1 className={styles.headline}>APPLICATION OUTCOME</h1>
          {/* *CARD CONATAINER* */}
          <div className={styles.card_content_area}>
          {/* *CARDS* */}
            <div className={styles.cards}>
                <div className={styles.card}>
                  <h2>Pending Application Outcome</h2>
                  <h3>My World Account</h3>
                  <p>Your application outcome is currently being generated.<br />
                  The great news is that, should you qualify and choose a loan the funds will be paid into an African Bank<br />
                  "MyWorld" account. which means you will have immediate access to the funds once the verifications have been successfully finalized.</p>
                      <div>
                          <button className={styles.wrapper}>
                              MyWorld DEPOSIT QUESTIONS
                              <div className={styles.tooltip}>
                                <span>
                                  <h5>MyWorld DEPOSIT QUESTIONS</h5>
                                  I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                                  Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                                  imperdiet libero,in condimentum odio mauris sed metus.<br />
                                  Nunc pharetra tincidunt<br />
                                  ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                                  leo vitae dictum euismod.
                                </span>
                              </div>
                          </button>
                      </div>
                  <h3>Credit Life Cover</h3>
                  <p>Please note all African Bank credit products come with a Credit Life Cover,
                  which is underwritten by Guard-Risk.<br /></p>
                  <p> It covers the full <b>outstanding balance</b> of the loan or credit-card <b>in the event of death and permanent disability</b><br />
                    It also covers <b>12 monthly instalments</b> in the event of <b>retrenchment or temporary disability.</b>
                  <b>The waiting period on ALL benefits is 90-days from the day of disbursement.</b><br />
                  <br />
                  You may submit your own credit life insurance if you have one.<br />However it is subject to African Bank approval.<br />
                  <br />
                  Will you be using your own Credit Life cover, or African Credit Life cover ?
                  </p>
                      <div>
                          <button className={styles.wrapper}>
                              CREDIT LIFE QUESTIONS
                              <div className={styles.tooltip}>
                                <span>
                                  <h5>CREDIT LIFE QUESTIONS</h5>
                                  I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                                  Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                                  imperdiet libero,in condimentum odio mauris sed metus.<br />
                                  Nunc pharetra tincidunt<br />
                                  ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                                  leo vitae dictum euismod.
                                </span>
                              </div>
                          </button>
                      </div>
                      <div>
                          <button className={styles.wrapper}>
                              CREDIT LIFE COST 
                              <div className={styles.tooltip}>
                                <span>
                                  <h5>CREDIT LIFE COST</h5>
                                  I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                                  Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                                  imperdiet libero,in condimentum odio mauris sed metus.<br />
                                  Nunc pharetra tincidunt<br />
                                  ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                                  leo vitae dictum euismod.
                                </span>
                              </div>
                          </button>
                      </div>
                      <p />
                </div>
                <div className={styles.card}>
                    <h2>Application Successful</h2>
                    <p>Thank you for holding **Customer Name**, Congratulations,<br />
                    based on the information you provided, you <b>provisionally qualify</b> for the following offers:<br /></p>
                    <p>Present offers as per OMNI Application Screen <img src="triangle.svg" alt="Pichere" width="24px"/><br/>
                    All offers to be discussed starting with the offer that closely matches the customer's need. <img src="triangle.svg" alt="Pichere" width="24px"/></p>
                    
                    <h3>Tech Credit (mention if available) <img src="triangle.svg" alt="Pichere" width="24px"/></h3>
                    <p>**Customer Name, African Bank has partnered with Blue Label,<br /> which offers fantastic technology deals.<br />
                    You can use a portion of your <b>loan</b> to purchase these value-added devices <br />such as cellphone, laptops and tablets.</p>
                    {/* <br /> */}
                    <p>There is an option available for you to purchase these devices on <b>12% interest rate repayable over 24 months.</b></p>
                      <div>
                          <button className={styles.wrapper}>
                                TECH CREDIT PRODUCTS
                              <div className={styles.tooltip}>
                                <span>
                                  <h5>TECH CREDIT PRODUCT OVERVIEW</h5>
                                  I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                                  Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                                  imperdiet libero,in condimentum odio mauris sed metus.<br />
                                  Nunc pharetra tincidunt<br />
                                  ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                                  leo vitae dictum euismod.
                                </span>
                              </div>
                          </button>
                      </div>
                    <p>Please note that more details will be provided by my colleague when going through your final offers.</p>
                    <h3>Overdraft</h3>
                    <p>The Overdraft facility will become active once you deposit your salary into your MyWorld account.</p>
                    <p>OR</p>
                    <p>By depositing 70% of your Net salary as captured during this application process into your MyWorld account.</p>
                    <p>The minimum repayment, which is currently 5%, must be paid monthly to keep the facility active and in good standing.</p>
                </div>
                <div className={styles.card}>
                    <h2>Bureau Info & Documentation</h2>
                    <h3>Bureau Information</h3>
                    <p>I am going to confirm your bureau information that is reflecting on my system with you,<br />
                    please confirm by saying <b>Yes, if you are still paying </b>any of these accounts, or <b>No if they are closed or paid-up</b></p>
                    
                    <ul>
                        <li>Read the bureau account and amount and get a confirmation from the cusomter</li>
                        <li>Remove an account if it is paid-up and closed</li>
                        <li>Add any other account that is not listed on the Customers bureau information</li>
                        <li>Confirm the <b>total monthly bureau obligations</b> with the Customer.</li>
                    </ul>
                    <p><b>If the Home Loan tab appears</b></p>
                    <p>**Customer Name, we can see that you are contributing towards one or multiple joint home loan(s).<br />
                    You have defaulted an amount of R xxx.xx, as part of your contribution to the payment. Is this the correct amount ?</p>
                    <p><b>If contribution amount is incorrect</b> <br/>Please confirm the correct amount ?</p>
                 
                 <h3>Documentation</h3>
                 The Documents we will need you to submit to us is:<br />
                  <b>*Read Required Document(s) as per OMNI Interface.</b><br/>
                  <h4>Email Instructions</h4>
                  <ol>
                      <li>Email address: 123@africanbank.co.za</li>
                      <li>Customer ID Number in the subject line</li>
                  </ol>
                  <h4>WhatsApp Instructions</h4>
                  <ol>
                      <li>whatsapp: 0865 409 409</li>
                      <li>Send a message saying 'hi' and follow the instructions sent to you.</li>
                  </ol>
                 </div> 
            </div>
            {/* *CARDS END* */}
          </div>
          {/* *CARD CONATAINER END* */}
      </div>
      {/* APPLICATION OUTCOME SECTION END */}

            {/* APPLICATION OUTCOME SECTION */}
      <div id="CLOSEOUT" className={styles.open_section}>
          <h1 className={styles.headline}>CLOSE-OUT PROTOCOL</h1>
          {/* *CARD CONATAINER* */}
          <div className={styles.card_content_area}>
          {/* *CARDS* */}
            <div className={styles.cards}>
                <div className={styles.card}>
                <h2>Digital Migration</h2>
                <h4><u>If a Customer has the app</u></h4>
                Occaecat consectetur est cillum Lorem voluptate culpa duis consequat cupidatat labore.
                Ad pariatur excepteur Lorem aute nulla amet.
                Adipisicing sit proident aliqua tempor sunt sint commodo.

                <h4><u>When a Customer does not have the app</u></h4>
                Occaecat consectetur est cillum Lorem voluptate culpa duis consequat cupidatat labore.
                Ad pariatur excepteur Lorem aute nulla amet.
                Adipisicing sit proident aliqua tempor sunt sint commodo.
                <br />
                Occaecat consectetur est cillum Lorem voluptate culpa duis consequat cupidatat labore.
                Ad pariatur excepteur Lorem aute nulla amet.
                Adipisicing sit proident aliqua tempor sunt sint commodo.

                <h2>Next Steps</h2>

                <h3>Debi-Check</h3>
                You will receive a Debi-Check notification before finalization of your application is complete.
                It is important to accept this auhtority, in order for us to deposit the funds into your account.
                <br />
                <h4><u>If Notification is not accepted ?</u></h4>
                Laborum labore in anim cupidatat tempor ex ipsum Lorem do sunt mollit. Amet incididunt nulla reprehenderit consequat minim culpa fugiat nostrud incididunt commodo duis velit. 
                <br />
                <h3>Expected waiting time</h3>
                Aute ex sint ut irure officia ad laboris. Elit sunt pariatur elit exercitation. Eu aliqua ad eu id eiusmod id irure qui et ad consequat amet consectetur.
               Et ea nisi ea laboris anim anim do magna esse. Ea veniam mollit id deserunt eiusmod.
               <h4></h4>
                Exercitation tempor Lorem incididunt aliqua dolore tempor amet aute veniam. Consequat nostrud excepteur tempor ullamco labore aute ut aliquip.
                 Veniam aliquip dolore do nisi consectetur et irure mollit elit nulla aliqua.
                 <h2>Create Expectation for Document(s)</h2>
                 <p />
                </div>
                <div className={styles.card}>
                <h2>Card Delivery</h2>
                Cupidatat ullamco exercitation fugiat qui ex proident non non quis. Deserunt eiusmod non enim laborum excepteur. 
                Reprehenderit veniam ut aliquip fugiat excepteur qui duis.
                 Elit voluptate aliqua tempor elit cupidatat dolor.
                 Amet nostrud deserunt culpa minim officia ex labore enim officia occaecat nulla quis qui magna.
                 Tempor esse amet est voluptate enim anim duis. Mollit amet dolore occaecat id adipisicing magna ad.
                <h4><u>Deliver Steps</u></h4>
                 <ol>
                    <li>Excepteur minim laborum excepteur laboris esse tempor.</li>
                    <li>Esse voluptate deserunt deserunt officia ullamco cupidatat officia dolore occaecat.</li>
                    <li>Sit nostrud excepteur duis cupidatat culpa quis anim anim.</li>
                 </ol>

                <h2><u>Fraud Alert</u></h2>
                Mollit laboris adipisicing voluptate eu et consequat dolore qui reprehenderit amet reprehenderit sint.
                 Magna est culpa incididunt consectetur. Fugiat deserunt tempor sint mollit laboris veniam minim in.
                 Elit aliqua labore excepteur pariatur occaecat ullamco officia non nulla est Lorem ex.

                <h2><u>Survey</u></h2>
                <p>Lorem consectetur laborum Lorem elit. Ipsum irure culpa incididunt incididunt culpa.
                 Et sint dolore Lorem reprehenderit sunt consequat ad enim quis.</p>
                <p>Eu culpa excepteur aute aute sunt tempor magna Lorem. 
                 Fugiat nostrud magna quis non labore sint consequat id nulla.
                Pariatur ullamco quis cupidatat deserunt aute occaecat irure nostrud eu.</p>
          —CREATE EXPECTATION(DOCS)
          --CONTRACT FINALIZATION
   
                </div>
            </div>
            {/* *CARDS END* */}
          </div>
          {/* *CARD CONATAINER END* */}
      </div>
      {/* APPLICATION OUTCOME SECTION END */}


      {/* <Footer />     */}
   </>
 )
}

  