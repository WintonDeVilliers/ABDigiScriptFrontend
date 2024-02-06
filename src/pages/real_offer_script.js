import styles from "../styles/Scripts.module.css";
import Footer from "@/components/Footer";
import RealOfferHeader from "@/components/RealOfferHeader";
// import Script from 'next/script'
// import Link from 'next/link'
import ReactMarkdown from "react-markdown";
// import Image from "next/image";
import foreignNational from "../../public/foreignNationalDocuments.png";
import presentOffers from "../../public/presentOffers.png";
import React, { useState } from "react";
import CustomModal from "../components/CustomModal";

export const getServerSideProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_URL_REAL_OFFER_SCRIPT);

  const sc_one_contents = await res.json();
  console.log(sc_one_contents);
  return { props: { sc_one_contents } };
};

export default function Real_Offer_Script({ sc_one_contents }) {
  const [isRFObjectionModalOpen, setIsRFObjectionModalOpen] = useState(false);
  // const ID & V
  const [isRefusingIDVProcessModalOpen, setIsRefusingIDVProcessingOpen] =
    useState(false);
  // const infoprocessing
  const [isRefusingInfoProcessingOpen, setIsRefusingInfoProcessingOpen] =
    useState(false);
  const [isPresentOffersModalOpen, setIsPresentOffersModalOpen] =
    useState(false);
  const [isRefusingInfoSharingModalOpen, setIsRefusingInfoSharingModalOpen] =
    useState(false);
  //const entersekt
  const [isIDVAuthNotificationModalOpen, setIsIDVAuthNotificationModalOpen] =
    useState(false);
  // const NCR , Overdraft, tech credit --> prod info
  const [isTechCreditModalOpen, setIsTechCreditModalOpen] = useState(false);
  const [isTechCreditProdSelectModalOpen, setIsTechCreditProdSelectModalOpen] =
    useState(false);
  const [isNCRLoanModalOpen, setIsNCRLoanModalOpen] = useState(false);
  const [isOverdraftModalOpen, setIsOverdraftModalOpen] = useState(false);
  // tech select screen shot
  // const myworld
  const [isMyWorldBenefitsOpen, setIsMyWorldBenefitsOpen] = useState(false);
  // const rewards
  const [isRewardsBenefitsOpen, setIsRewardsBenefitsOpen] = useState(false);

  const [isDebiCheckModalOpen, setIsDebiCheckModalOpen] = useState(false);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  // debicheck  -- wide modal to cater for loan and credit

  // capturetips x3 screenshots (TBD QA sourcing)

  const openRFObjectionModal = () => {
    setIsRFObjectionModalOpen(true);
  };

  const closeRFObjectionModal = () => {
    setIsRFObjectionModalOpen(false);
  };
  const openRefusingIDVProcessModal = () => {
    setIsRefusingIDVProcessingOpen(true);
  };

  const closeRefusingIDVProcessModal = () => {
    setIsRefusingIDVProcessingOpen(false);
  };
  const openRefusingInfoProcessingModal = () => {
    setIsRefusingInfoProcessingOpen(true);
  };
  const closeRefusingInfoSharingModal = () => {
    setIsRefusingInfoProcessingOpen(false);
  };

  const openPresentOffersModal = () => {
    setIsPresentOffersModalOpen(true);
  };

  const closePresentOffersModal = () => {
    setIsPresentOffersModalOpen(false);
  };

  const openIDVAuthNotificationModal = () => {
    setIsIDVAuthNotificationModalOpen(true);
  };
  const closeIDVAuthNotificationModal = () => {
    setIsIDVAuthNotificationModalOpen(false);
  };
  const openTechCreditModal = () => {
    setIsTechCreditModalOpen(true);
  };
  const closeTechCreditModal = () => {
    setIsTechCreditModalOpen(false);
  };
  const openTechCeditProductSelectModal = () => {
    setIsTechCreditProdSelectModalOpen(true);
  };
  const closeTechCreditProductSelectModal = () => {
    setIsTechCreditProdSelectModalOpen(false);
  };

  const openNCRLoanModal = () => {
    setIsNCRLoanModalOpen(true);
  };

  const closeNCRLoanModal = () => {
    setIsNCRLoanModalOpen(false);
  };

  const openOverdraftModal = () => {
    setIsOverdraftModalOpen(true);
  };

  const closeOverdraftModal = () => {
    setIsOverdraftModalOpen(false);
  };

  const openMyWorldBenefistsModal = () => {
    setIsMyWorldBenefitsOpen(true);
  };

  const closeMyWorlBenefitsModal = () => {
    setIsMyWorldBenefitsOpen(false);
  };
  const openRewardsBenefitsModal = () => {
    setIsRewardsBenefitsOpen(true);
  };

  const closeRewardsBenefitsModal = () => {
    setIsRewardsBenefitsOpen(false);
  };
  const openDebiCheckModal = () => {
    setIsDebiCheckModalOpen(true);
  };

  const closeDebiCheckModal = () => {
    setIsDebiCheckModalOpen(false);
  };

  const openLevelUpModal = () => {
    setIsLevelUpModalOpen(true);
  };

  const closeLevelUpModal = () => {
    setIsLevelUpModalOpen(false);
  };
  // const  = () => {

  // }

  // const  = () => {

  // }

  if (!sc_one_contents) return <div>Loading...</div>;

  return (
    <>
      <RealOfferHeader />
      {sc_one_contents.data.map((sc_one_content) => (
        <div key={sc_one_content.attributes.id}>
          <div id="OPEN" className={styles.open_section}>
            <h1 className={styles.headline}>
              <mark className={styles.mark}>OFFER PRESENTATION</mark>
            </h1>
          </div>
          <div className={styles.card_content_area}>
            <div>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <ReactMarkdown>
                    {sc_one_content.attributes.Introduction}
                  </ReactMarkdown>
                  <ReactMarkdown>
                    {sc_one_content.attributes.DigitalMigrationConversation}
                  </ReactMarkdown>
                  <button
                    className={styles.modal_btn}
                    onClick={openRFObjectionModal}
                  >
                    POSSIBLE OBJECTIONS
                  </button>
                  <CustomModal
                    isOpen={isRFObjectionModalOpen}
                    onRequestClose={closeRFObjectionModal}
                    contentLabel="objection_modal"
                  >
                    <ReactMarkdown>
                      {sc_one_content.attributes.PossibleObjections}
                    </ReactMarkdown>
                  </CustomModal>
                  <br />
                  <p />
                </div>

                <div className={styles.card}>
                  <ReactMarkdown>
                    {sc_one_content.attributes.CustomerAuthentication}
                  </ReactMarkdown>
                  <ReactMarkdown>
                    {sc_one_content.attributes.IdAndVerification}
                  </ReactMarkdown>
                  <button
                    className={styles.modal_btn}
                    onClick={openRefusingIDVProcessModal}
                  >
                    REFUSING ID & V
                  </button>
                  <CustomModal
                    isOpen={isRefusingIDVProcessModalOpen}
                    onRequestClose={closeRefusingIDVProcessModal}
                    contentLabel="refusingIDV"
                  >
                    <h3>ID & V </h3>
                  </CustomModal>

                  <ReactMarkdown>
                    {sc_one_content.attributes.Entersekt}
                  </ReactMarkdown>
                  <ReactMarkdown>
                    {sc_one_content.attributes.RegulatoryStatement}
                  </ReactMarkdown>
                </div>

                <div className={styles.card}>
                  <ReactMarkdown>
                    {
                      sc_one_content.attributes
                        .ConsentToProcessPersonalInformation
                    }
                  </ReactMarkdown>

                  <ReactMarkdown>
                    {sc_one_content.attributes.OffersDiscussion}
                  </ReactMarkdown>
                  <div>
                    <button
                      className={styles.modal_btn}
                      onClick={openPresentOffersModal}
                    >
                      PRESENT OFFERS
                    </button>
                    <CustomModal
                      isOpen={isPresentOffersModalOpen}
                      onRequestClose={closePresentOffersModal}
                      contentLabel="presentOffers"
                    >
                      {/* <Image
                        src={presentOffers}
                        className={styles.img_InModal}
                        alt="Present Offers as per OMNI"
                      /> */}
                    </CustomModal>
                  </div>
                  <ReactMarkdown>
                    {sc_one_content.attributes.NCRShortTermLoan}
                  </ReactMarkdown>
                  <button
                    className={styles.modal_btn}
                    onClick={openNCRLoanModal}
                  >
                    NCR BENEFITS
                  </button>
                  <CustomModal
                    isOpen={isNCRLoanModalOpen}
                    onRequestClose={closeNCRLoanModal}
                    contentLabel="NCR"
                  >
                    <ReactMarkdown>
                      {sc_one_content.attributes.NCRBenefits}
                    </ReactMarkdown>
                  </CustomModal>

                  <ReactMarkdown>
                    {sc_one_content.attributes.TechCredit}
                  </ReactMarkdown>
                  <button
                    className={styles.modal_btn}
                    onClick={openTechCreditModal}
                  >
                    TECH CREDIT BENEFITS
                  </button>
                  <CustomModal
                    isOpen={isTechCreditModalOpen}
                    onRequestClose={closeTechCreditModal}
                    contentLabel="techCredit"
                  >
                    <ReactMarkdown>
                      {sc_one_content.attributes.TechCreditBenefits}
                    </ReactMarkdown>
                  </CustomModal>

                  <p />
                  <button
                    className={styles.modal_btn}
                    onClick={openLevelUpModal}
                  >
                    LEVEL UP
                  </button>

                  <CustomModal
                    isOpen={isLevelUpModalOpen}
                    onRequestClose={closeLevelUpModal}
                    contentLabel="levelup"
                  >
                    <ReactMarkdown>
                      {sc_one_content.attributes.LevelUpTiers}
                    </ReactMarkdown>
                  </CustomModal>
                </div>
              </div>

              <div id="APPSTART" className={styles.open_section}>
                <h1 className={styles.headline}>
                  <mark className={styles.mark}>
                    CONTRACTING INFORMATION CAPTURE
                  </mark>
                </h1>
              </div>

              <div className={styles.card_content_area}>
                <div className={styles.cards}>
                  <div className={styles.card}>
                    <ReactMarkdown>
                      {sc_one_content.attributes.ConfirmDeliveryAddress}
                    </ReactMarkdown>
                    <ReactMarkdown>
                      {sc_one_content.attributes.CreditApplicationDisbursement}
                    </ReactMarkdown>
                    <ReactMarkdown>
                      {
                        sc_one_content.attributes
                          .MyWorldDisbursementConversation
                      }
                    </ReactMarkdown>

                    <button
                      className={styles.modal_btn}
                      onClick={openMyWorldBenefistsModal}
                    >
                      MyWORLD BENEFITS
                    </button>

                    <CustomModal
                      isOpen={isMyWorldBenefitsOpen}
                      onRequestClose={closeMyWorlBenefitsModal}
                      contentLabel="myworld"
                    >
                      {" "}
                      <ReactMarkdown>
                        {sc_one_content.attributes.MyWorldBenefits}
                      </ReactMarkdown>
                    </CustomModal>
                    <p />
                  </div>

                  <div className={styles.card}>
                    <ReactMarkdown>
                      {sc_one_content.attributes.Rewards}
                    </ReactMarkdown>
                    <button
                      className={styles.modal_btn}
                      onClick={openRewardsBenefitsModal}
                    >
                      REWARDS BENEFITS
                    </button>
                    <CustomModal
                      isOpen={isRewardsBenefitsOpen}
                      onRequestClose={closeRewardsBenefitsModal}
                      contentLabel="rewards"
                    >
                      <ReactMarkdown>
                        {sc_one_content.attributes.RewardsBenefits}
                      </ReactMarkdown>
                    </CustomModal>
                    <p />
                  </div>

                  <div className={styles.card}>
                    <ReactMarkdown>
                      {sc_one_content.attributes.SGCaptureContactDetails}
                    </ReactMarkdown>
                    <ReactMarkdown>
                      {
                        sc_one_content.attributes
                          .SGCapturePhysicalAddressInformation
                      }
                    </ReactMarkdown>
                    <ReactMarkdown>
                      {sc_one_content.attributes.SGCapturePEPInformation}
                    </ReactMarkdown>
                    <ReactMarkdown>
                      {sc_one_content.attributes.InfoValidationEntersekt}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>

              <div id="APPOUTCOME" className={styles.open_section}>
                <h1 className={styles.headline}>
                  <mark className={styles.mark}>
                    CONTRACTING COSTS AND PAYMENTS
                  </mark>
                </h1>
              </div>

              <div className={styles.card_content_area}>
                <div className={styles.cards}>
                  <div className={styles.card}>
                    <ReactMarkdown>
                      {sc_one_content.attributes.DebiCheckAuthentication}
                    </ReactMarkdown>
                    <ReactMarkdown>
                      {sc_one_content.attributes.DebiCheckAuthenticationLoan}
                    </ReactMarkdown>

                    <ReactMarkdown>
                      {
                        sc_one_content.attributes
                          .DebiCheckAuthenticationCreditCard
                      }
                    </ReactMarkdown>
                  </div>

                  <div className={styles.card}>
                    <ReactMarkdown>
                      {sc_one_content.attributes.ChecklistCostOfCredit}
                    </ReactMarkdown>
                    <ReactMarkdown>
                      {sc_one_content.attributes.CreditCardDisclaimer}
                    </ReactMarkdown>
                  </div>

                  <div className={styles.card}>
                    <ReactMarkdown>
                      {sc_one_content.attributes.PaymentArrangement}
                    </ReactMarkdown>
                    <ReactMarkdown>
                      {sc_one_content.attributes.IncomeExpenseConfirmation}
                    </ReactMarkdown>
                    <ReactMarkdown>
                      {sc_one_content.attributes.CardCollectionOrDelivery}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>

              <div id="CLOSEOUT" className={styles.open_section}>
                <h1 className={styles.headline}>
                  <mark className={styles.mark}>CLOSE-OUT</mark>
                </h1>
              </div>

              <div className={styles.card_content_area}>
                <div className={styles.cards}>
                  <div className={styles.card}>
                    <ReactMarkdown>
                      {sc_one_content.attributes.TermsAndConditions}
                    </ReactMarkdown>
                  </div>
                  <div className={styles.card}>
                    <ReactMarkdown>
                      {sc_one_content.attributes.Conclusion}
                    </ReactMarkdown>
                    <ReactMarkdown>
                      {sc_one_content.attributes.FraudAlert}
                    </ReactMarkdown>
                  </div>

                  <div className={styles.card}>
                    <ReactMarkdown>
                      {sc_one_content.attributes.DigitalMigration}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
