import styles from "../styles/Scripts.module.css";
import Footer from "@/components/Footer";
import RealOfferHeader from "@/components/RealOfferHeader";
// import Script from 'next/script'
// import Link from 'next/link'
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import foreignNational from "../../public/foreignNationalDocuments.png";
import presentOffers from "../../public/presentOffers.png";
import React from "react";

export const getServerSideProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_URL_REAL_OFFER_SCRIPT);

  const sc_one_contents = await res.json();
  console.log(sc_one_contents);
  return { props: { sc_one_contents } };
};

export default function Real_Offer_Script({ sc_one_contents }) {
  if (!sc_one_contents) return <div>Loading...</div>;

  return (
    <>
      <RealOfferHeader />
      {sc_one_contents.data.map((sc_one_content) => (
        <div key={sc_one_content.attributes.id}>
          <div id="OPEN" className={styles.open_section}>
            <h1 className={styles.headline}>
              <mark className={styles.mark}>
                INTRODUCTION & OFFER PRESENTATION
              </mark>
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
                  <ReactMarkdown>
                    {sc_one_content.attributes.PossibleObjections}
                  </ReactMarkdown>
                </div>

                <div className={styles.card}>
                  <ReactMarkdown>
                    {sc_one_content.attributes.CustomerAuthentication}
                  </ReactMarkdown>
                  <ReactMarkdown>
                    {sc_one_content.attributes.IdAndVerification}
                  </ReactMarkdown>
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
                    <button className={styles.img_wrapper}>
                      PRESENT OFFERS
                      <div className={styles.img_tooltip}>
                        <Image
                          src={presentOffers}
                          alt="Present Offers as per OMNI"
                          width={500}
                          height={350}
                        />
                      </div>
                    </button>
                  </div>
                  <ReactMarkdown>
                    {sc_one_content.attributes.NCRShortTermLoan}
                  </ReactMarkdown>
                  <ReactMarkdown>
                    {sc_one_content.attributes.TechCredit}
                  </ReactMarkdown>
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
                  </div>

                  <div className={styles.card}>
                    <ReactMarkdown>
                      {sc_one_content.attributes.Rewards}
                    </ReactMarkdown>
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
