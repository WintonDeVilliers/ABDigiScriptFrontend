import styles from "../styles/Scripts.module.css";
// import Footer from "@/components/Footer";
import FirstCallHeader from "@/components/FirstCallHeader";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import foreignNational from "../../public/foreignNationalDocuments.png";
import presentOffers from "../../public/presentOffers.png";
import React, { useState } from "react";
import CustomModal from "./../components/CustomModal";

export const getServerSideProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_URL_SALES_FIRST_CALL);

  const sc_one_contents = await res.json();
  console.log(sc_one_contents);
  return { props: { sc_one_contents } };
};

export default function Call_scripts({ sc_one_contents }) {
  const [isObjectionModalOpen, setIsObjectionModalOpen] = useState(false);
  const [isForeignNationalModalOpen, setIsForeignNationalModalOpen] =
    useState(false);
  const [isRefusingIDVProcessModalOpen, setIsRefusingIDVProcessModalOpen] =
    useState(false);
  const [isIDVAuthNotificationModalOpen, setIsIDVAuthNotificationModalOpen] =
    useState(false);
  const [isRefusingInfoSharingModalOpen, setIsRefusingInfoSharingModalOpen] =
    useState(false);

  const [isPreQualificationModalOpen, setIsPreQualificationModalOpen] =
    useState(false);
  const [isComplianceFaqModalOpen, setIsComplianceFaqModalOpen] =
    useState(false);
  const [isBankingDetailsFaqModalOpen, setIsBankingDetailsFaqModalOpen] =
    useState(false);
  const [isPersalNumberFaqModalOpen, setIsPersalNumberFaqModalOpen] =
    useState(false);
  const [isContractWorkerModalOpen, setIsContractWorkerModalOpen] =
    useState(false);

  const [isMyWorldBenefitsModalOpen, setIsMyWorldBenefitsModalOpen] =
    useState(false);
  const [isRewardsModalOpen, setIsRewardsModalOpen] = useState(false);
  const [isOverdraftBenefitsModalOpen, setIsOverdraftBenefitsModalOpen] =
    useState(false);
  const [isApplicationDeclineModalOpen, setIsApplicationDeclineModalOpen] =
    useState(false);
  const [isCreditLifeFaqModalOpen, setIsCreditLifeFaqModalOpen] =
    useState(false);
  const [isTechCreditModalOpen, setIsTechCreditModalOpen] = useState(false);
  const [isNCRLoanModalOpen, setIsNCRLoanModalOpen] = useState(false);

  const openObjectionModal = () => {
    setIsObjectionModalOpen(true);
  };

  const closeObjectionModal = () => {
    setIsObjectionModalOpen(false);
  };

  const openForeignNationalModal = () => {
    setIsForeignNationalModalOpen(true);
  };

  const closeForeignNationalModal = () => {
    setIsForeignNationalModalOpen(false);
  };
  const openRefusingIDVProcessModal = () => {
    setIsRefusingIDVProcessModalOpen(true);
  };

  const closeRefusingIDVProcesModal = () => {
    setIsRefusingIDVProcessModalOpen(false);
  };

  const openIDVAuthNotificatioModal = () => {
    setIsIDVAuthNotificationModalOpen(true);
  };

  const closeIDVAuthNotificatioModal = () => {
    setIsIDVAuthNotificationModalOpen(false);
  };

  const openRefusingInfoSharingModal = () => {
    setIsRefusingInfoSharingModalOpen(true);
  };

  const closeRefusingInfoSharingModal = () => {
    setIsRefusingInfoSharingModalOpen(false);
  };

  const openPreQualificationModal = () => {
    setIsPreQualificationModalOpen(true);
  };

  const closePreQualificationModal = () => {
    setIsPreQualificationModalOpen(false);
  };

  const openComplianceFaqModal = () => {
    setIsComplianceFaqModalOpen(true);
  };

  const closeComplianceFaqModal = () => {
    setIsComplianceFaqModalOpen(false);
  };
  const openBankingDetailsFaqModal = () => {
    setIsBankingDetailsFaqModalOpen(true);
  };

  const closeBankingDetailsFaqModal = () => {
    setIsBankingDetailsFaqModalOpen(false);
  };
  const openPersalNumberFaqModal = () => {
    setIsPersalNumberFaqModalOpen(true);
  };

  const closePersalNumberFaqModal = () => {
    setIsPersalNumberFaqModalOpen(false);
  };
  const openContractWorkerModal = () => {
    setIsContractWorkerModalOpen(true);
  };

  const closeContractWorkerModal = () => {
    setIsContractWorkerModalOpen(false);
  };
  const openMyWorldBenefitModal = () => {
    setIsMyWorldBenefitsModalOpen(true);
  };

  const closeMyWorldBenefitModal = () => {
    setIsMyWorldBenefitsModalOpen(false);
  };

  const openRewardsModal = () => {
    setIsRewardsModalOpen(true);
  };

  const closeRewardsModal = () => {
    setIsRewardsModalOpen(false);
  };
  const openOverdraftBenefitsModal = () => {
    setIsOverdraftBenefitsModalOpen(true);
  };

  const closeOverdraftBenefitsModal = () => {
    setIsOverdraftBenefitsModalOpen(false);
  };
  const openApplicationDeclineModal = () => {
    setIsApplicationDeclineModalOpen(true);
  };

  const closeApplicationDeclineModal = () => {
    setIsApplicationDeclineModalOpen(false);
  };
  const openCreditLifeFaqModal = () => {
    setIsCreditLifeFaqModalOpen(true);
  };

  const closeCreditLifeFaqModal = () => {
    setIsCreditLifeFaqModalOpen(false);
  };
  const openTechCreditModal = () => {
    setIsTechCreditModalOpen(true);
  };

  const closeTechCreditModal = () => {
    setIsTechCreditModalOpen(false);
  };
  const openNCRLoanModal = () => {
    setIsNCRLoanModalOpen(true);
  };

  const closeNCRLoanModal = () => {
    setIsNCRLoanModalOpen(false);
  };
  //           const openModal = () => {
  //   setIs(true);
  // };

  // const closeModal = () => {
  //   setIs(false);
  // };

  if (!sc_one_contents) return <div>Loading...</div>;

  return (
    <>
      {/* NAVIGATION BAR */}
      <FirstCallHeader />
      {/* NAVIGATION BAR  END*/}
      {sc_one_contents.data.map((sc_one_content) => (
        <div key={sc_one_content.attributes.id}>
          {/* CALL INTRO SECTION START */}
          <div id="OPEN" className={styles.open_section}>
            <h1 className={styles.headline}>
              <mark className={styles.mark}>INTRODUCTION</mark>
            </h1>
          </div>
          {/* *CARD CONTENT AREA * */}
          <div>
            <div>
              <div className={styles.cards}>
                {/* *INTRO CARD START * */}
                <div className={styles.card}>
                  <ReactMarkdown>
                    {sc_one_content.attributes.Introduction}
                  </ReactMarkdown>
                  {/* HOOK BUTTONS START */}

                  {/* HOOK BUTTONS END */}
                  <ReactMarkdown>
                    {sc_one_content.attributes.SignalAppInitiation}
                  </ReactMarkdown>
                  <ReactMarkdown>
                    {sc_one_content.attributes.CommonObjections}
                  </ReactMarkdown>
                  {/*FREQUENT OBJECTION BUTTON(s)*/}
                  {/* MODAL */}
                  <div>
                    <button onClick={openObjectionModal}>Open Modal</button>
                    <CustomModal
                      isOpen={isObjectionModalOpen}
                      onRequestClose={closeObjectionModal}
                      contentLabel="Modal 2"
                    >
                      <h2>Objection Modal</h2>
                    </CustomModal>
                  </div>
                  {/* MODAL */}

                  <br />
                  <div>
                    <button className={styles.wrapper}>
                      <ReactMarkdown>
                        {sc_one_content.attributes.AlreadyHaveALoan}
                      </ReactMarkdown>
                      <div className={styles.tooltip}>
                        <span>
                          <ReactMarkdown>
                            {sc_one_content.attributes.AlreadyHaveALoanReply}
                          </ReactMarkdown>
                        </span>
                      </div>
                    </button>
                  </div>

                  {/*FREQUENT OBJECTION BUTTON(s) END*/}
                  {/* FEATURES AND BENEFITS */}

                  <br />
                  <br />
                </div>
                {/* *INTRO CARD END * */}

                {/* *PRE-QUALIFYING QUESTIONS CARD START * */}
                <div className={styles.card}>
                  <ReactMarkdown>
                    {sc_one_content.attributes.RegulatoryStatements}
                  </ReactMarkdown>

                  <br />
                </div>
                {/* *COMPLIANCE BUTTON GROUP END * */}

                {/* *PRE-QUALIFYING QUESTIONS CARD END * */}
                {/* *EARLY DIGITAL MIGRATION CARD START * */}
                <div className={styles.card}>
                  <ReactMarkdown>
                    {sc_one_content.attributes.PreQualifyingQuestions}
                  </ReactMarkdown>

                  <ReactMarkdown>
                    {sc_one_content.attributes.EarlyDigitalMigration}
                  </ReactMarkdown>
                </div>
                {/* *EARLY DIGITAL MIGRATION CARD END * */}
              </div>
            </div>
          </div>
          {/* *CARD CONTENT AREA END* */}
          {/* CALL INTRO SECTION END */}

          {/* APPLICATION START SECTION */}
          <div id="APPSTART" className={styles.open_section}>
            <h1 className={styles.headline}>
              <mark className={styles.mark}>APPLICATION START</mark>
            </h1>
          </div>
          {/* *CARD CONTENT AREA * */}
          <div className={styles.card_content_area}>
            <div className={styles.cards}>
              {/* CUSTOMER AUTH CARD */}
              <div className={styles.card}>
                {/* <ReactMarkdown>
                  {sc_one_content.attributes.RegulatoryStatements}
                </ReactMarkdown> */}

                <p />
                <ReactMarkdown>
                  {sc_one_content.attributes.IdentificationAndVerification}
                </ReactMarkdown>
                <div>
                  <button className={styles.img_wrapper}>
                    FOREIGN NATIONAL
                    <div className={styles.img_tooltip}>
                      <Image
                        src={foreignNational}
                        alt="Ask aobut Permit expiration"
                        width={500}
                        height={350}
                      />
                    </div>
                  </button>
                </div>
                <br />
                <div>
                  <button className={styles.wrapper}>
                    REFUSING ID&V PROCESSING
                    <div className={styles.tooltip}>
                      <ReactMarkdown>
                        {sc_one_content.attributes.REFUSINGPROCESSING}
                      </ReactMarkdown>
                    </div>
                  </button>
                </div>
                <br />
                <div>
                  <button className={styles.wrapper}>
                    POP-UP NOTIFICATION NOT RECIEVED
                    <div className={styles.tooltip}>
                      <ReactMarkdown>
                        {sc_one_content.attributes.POPUPNOTRECEIVED}
                      </ReactMarkdown>
                    </div>
                  </button>
                </div>

                <ReactMarkdown>
                  {sc_one_content.attributes.MarketingConsent}
                </ReactMarkdown>
                <ReactMarkdown>
                  {sc_one_content.attributes.ConsentToProcessInfo}
                </ReactMarkdown>
                <div>
                  <button className={styles.wrapper}>
                    REFUSING INFO SHARING
                    <div className={styles.tooltip}>
                      <span>
                        <ReactMarkdown>
                          {sc_one_content.attributes.REFUSINGINFOSHARING}
                        </ReactMarkdown>
                      </span>
                    </div>
                  </button>
                </div>
                <br />
              </div>
              {/* CUSTOMER AUTH CARD */}
              <div className={styles.card}>
                <ReactMarkdown>
                  {sc_one_content.attributes.ComplianceQuestions}
                </ReactMarkdown>
                {/* *COMPLIANCE BUTTON GROUP * */}
                <div>
                  <button className={styles.wrapper}>
                    PRE-QUALIFICATION NOT MET
                    <div className={styles.tooltip}>
                      <span>
                        <ReactMarkdown>
                          {sc_one_content.attributes.PREQUALNOTMET}
                        </ReactMarkdown>
                      </span>
                    </div>
                  </button>
                </div>
                <br />
                <div>
                  <button className={styles.wrapper}>
                    COMPLIANCE FAQ's
                    <div className={styles.tooltip}>
                      <span>
                        <ReactMarkdown>
                          {sc_one_content.attributes.COMPLIANCEFAQS}
                        </ReactMarkdown>
                      </span>
                    </div>
                  </button>
                </div>
                <br />
                <div>
                  <button className={styles.wrapper}>
                    CUSTOMER DECLINE CREDIT CHECK(S)
                    <div className={styles.tooltip}>
                      <span>
                        <ReactMarkdown>
                          {sc_one_content.attributes.CUSTOMERDECLINECREDITCHECK}
                        </ReactMarkdown>
                      </span>
                    </div>
                  </button>
                </div>
                <ReactMarkdown>
                  {sc_one_content.attributes.BankingDetails}
                </ReactMarkdown>
                <div>
                  <button className={styles.wrapper}>
                    BANKING DETAILS FAQ's
                    <div className={styles.tooltip}>
                      <span>
                        <ReactMarkdown>
                          {sc_one_content.attributes.BANKINGDETAILSFAQS}
                        </ReactMarkdown>
                      </span>
                    </div>
                  </button>
                </div>
                <ReactMarkdown>
                  {sc_one_content.attributes.BankStatements}
                </ReactMarkdown>

                {/* <div>
                  <button className={styles.wrapper}>
                    CLIENT WANTS TO SEND BANK STATEMENTS
                    <div className={styles.tooltip}>
                      <span>
                        <h5>CLIENT WANTS TO SEND BANK STATEMENTS</h5>
                        I am a ldLorem ipsum dolor sit amet,consectetur
                        adipiscing elit.
                        <br />
                        Nunc convallis,nisl vel venenatis molestie,lectus ligula
                        <br />
                        imperdiet libero,in condimentum odio mauris sed metus.
                        <br />
                        Nunc pharetra tincidunt
                        <br />
                        ligula nec finibus. Pellentesque ut congue elit.
                        Praesent aliquam
                        <br />
                        leo vitae dictum euismod.
                      </span>
                    </div>
                  </button>
                </div> */}
                <ReactMarkdown>
                  {sc_one_content.attributes.EmployerDetails}
                </ReactMarkdown>

                <div>
                  <button className={styles.wrapper}>
                    PERSAL NUMBERS
                    <div className={styles.tooltip}>
                      <span>
                        <ReactMarkdown>
                          {sc_one_content.attributes.PERSALNUMBERS}
                        </ReactMarkdown>
                      </span>
                    </div>
                  </button>
                </div>
                <br />
                <div>
                  <button className={styles.wrapper}>
                    CONTRACT WORKERS
                    <div className={styles.tooltip}>
                      <span>
                        <ReactMarkdown>
                          {sc_one_content.attributes.CONTRACTWORKERS}
                        </ReactMarkdown>
                      </span>
                    </div>
                  </button>
                </div>
                <br />
              </div>
              {/* CUSTOMER AUTH CARD END*/}
              {/* INCOME NAD EXPENSES*/}
              <div className={styles.card}>
                <ReactMarkdown>
                  {sc_one_content.attributes.IncomeAndExpenses}
                </ReactMarkdown>
              </div>
              {/* INCOME NAD EXPENSES END*/}
            </div>
          </div>
          {/* APPLICATION START SECTION END */}

          <div id="APPOUTCOME" className={styles.open_section}>
            <h1 className={styles.headline}>
              <mark className={styles.mark}>APPLICATION OUTCOME</mark>
            </h1>
          </div>
          {/* *CARD CONTENT AREA * */}
          <div className={styles.card_content_area}>
            <div className={styles.cards}>
              {/* PENDING APP OUTCOME CARD */}
              <div className={styles.card}>
                <ReactMarkdown>
                  {sc_one_content.attributes.PendingApplicationOutcome}
                </ReactMarkdown>

                <ReactMarkdown>
                  {sc_one_content.attributes.MyWorld}
                </ReactMarkdown>
                <div>
                  <button className={styles.wrapper}>
                    MyWorld Benefits
                    <div className={styles.tooltip}>
                      <span>
                        <ReactMarkdown>
                          {sc_one_content.attributes.MyWorldBenefits}
                        </ReactMarkdown>
                      </span>
                    </div>
                  </button>
                </div>
                <br />
                <ReactMarkdown>
                  {sc_one_content.attributes.Rewards}
                </ReactMarkdown>
                <div>
                  <button className={styles.wrapper}>
                    Rewards Benefits
                    <div className={styles.tooltip}>
                      <span>
                        <ReactMarkdown>
                          {sc_one_content.attributes.RewardsBenefits}
                        </ReactMarkdown>
                      </span>
                    </div>
                  </button>
                </div>
                <br />

                <ReactMarkdown>
                  {sc_one_content.attributes.Overdraft}
                </ReactMarkdown>
                <div>
                  <button className={styles.wrapper}>
                    Overdraft Benefits
                    <div className={styles.tooltip}>
                      <span>
                        <ReactMarkdown>
                          {sc_one_content.attributes.OverdraftBenefits}
                        </ReactMarkdown>
                      </span>
                    </div>
                  </button>
                </div>
                <br />
              </div>
              {/* PENDING APP OUTCOME CARD */}
              <div className={styles.card}>
                <ReactMarkdown>
                  {sc_one_content.attributes.ApplicationDecline}
                </ReactMarkdown>
                <div>
                  <button className={styles.wrapper}>
                    APPLICATION DECLINE REASONS
                    <div className={styles.tooltip}>
                      <span>
                        <ReactMarkdown>
                          {sc_one_content.attributes.ApplicationDeclineReasons}
                        </ReactMarkdown>
                      </span>
                    </div>
                  </button>
                </div>
                <ReactMarkdown>
                  {sc_one_content.attributes.CloseOutDecline}
                </ReactMarkdown>
              </div>
              {/* PENDING APP OUTCOME CARD */}
              {/* BUREAU INFO & DOCUMENTS CARD */}
              <div className={styles.card}>
                <ReactMarkdown>
                  {sc_one_content.attributes.ApplicationSuccessfulOutcome}
                </ReactMarkdown>
                <div>
                  <button className={styles.img_wrapper}>
                    PRESENT OFFERS
                    <div className={styles.img_tooltip}>
                      <Image
                        src={presentOffers}
                        alt="Present Offers on OMNI"
                        width={500}
                        height={350}
                      />
                    </div>
                  </button>
                </div>
                <ReactMarkdown>
                  {sc_one_content.attributes.DebiCheck}
                </ReactMarkdown>
                <ReactMarkdown>
                  {sc_one_content.attributes.CreditLifeCover}
                </ReactMarkdown>
                <div>
                  <button className={styles.wrapper}>
                    CREDIT LIFE FAQ's
                    <div className={styles.tooltip}>
                      <span>
                        <ReactMarkdown>
                          {sc_one_content.attributes.CREDITLIFEFAQS}
                        </ReactMarkdown>
                      </span>
                    </div>
                  </button>
                </div>
                <p />
                {/* <div>
                  <button className={styles.wrapper}>
                    CREDIT LIFE COST
                    <div className={styles.tooltip}>
                      <span>
                        <h5>CREDIT LIFE COST</h5>
                        I am a ldLorem ipsum dolor sit amet,consectetur
                        adipiscing elit.
                        <br />
                        Nunc convallis,nisl vel venenatis molestie,lectus ligula
                        <br />
                        imperdiet libero,in condimentum odio mauris sed metus.
                        <br />
                        Nunc pharetra tincidunt
                        <br />
                        ligula nec finibus. Pellentesque ut congue elit.
                        Praesent aliquam
                        <br />
                        leo vitae dictum euismod.
                      </span>
                    </div>
                  </button>
                </div> */}
                <ReactMarkdown>
                  {sc_one_content.attributes.TechCredit}
                </ReactMarkdown>
                <div>
                  <button className={styles.wrapper}>
                    TECH CREDIT
                    <div className={styles.tooltip}>
                      <ReactMarkdown>
                        {sc_one_content.attributes.TechCreditBenefits}
                      </ReactMarkdown>
                    </div>
                  </button>
                </div>
                <ReactMarkdown>{sc_one_content.attributes.NCR}</ReactMarkdown>
                <div>
                  <button className={styles.wrapper}>
                    NCR LOAN
                    <div className={styles.tooltip}>
                      <ReactMarkdown>
                        {sc_one_content.attributes.NCRBenefits}
                      </ReactMarkdown>
                    </div>
                  </button>
                </div>
                <p />
              </div>
              {/* BUREAU INFO & DOCUMENTS CARD */}
            </div>

            <div id="CLOSEOUT" className={styles.open_section}>
              <h1 className={styles.headline}>
                <mark className={styles.mark}>CLOSE-OUT PROTOCOL</mark>
              </h1>
            </div>
            <div className={styles.card_content_area}>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <ReactMarkdown>
                    {sc_one_content.attributes.BureauInformation}
                  </ReactMarkdown>
                </div>
                <div className={styles.card}>
                  <ReactMarkdown>
                    {sc_one_content.attributes.Documentation}
                  </ReactMarkdown>
                  <ReactMarkdown>
                    {sc_one_content.attributes.ApprovedConclusion}
                  </ReactMarkdown>
                </div>
                <div className={styles.card}>
                  <ReactMarkdown>
                    {sc_one_content.attributes.CardDelivery}
                  </ReactMarkdown>
                  <ReactMarkdown>
                    {sc_one_content.attributes.FraudAlert}
                  </ReactMarkdown>
                  <ReactMarkdown>
                    {sc_one_content.attributes.Survey}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>

          {/* *CARD CONTENT AREA * */}
        </div>
      ))}
    </>
  );
}
