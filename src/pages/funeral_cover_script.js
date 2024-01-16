import styles from "../styles/Scripts.module.css";
import Footer from "@/components/Footer";
import FuneralCoverHeader from "@/components/FuneralCoverHeader";
import ReactMarkdown from "react-markdown";

export const getServerSideProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_URL_FUNERAL_CALL);

  const sc_one_contents = await res.json();
  console.log(sc_one_contents);
  return { props: { sc_one_contents } };
};

export default function FuneralCoverScript({ sc_one_contents }) {
  if (!sc_one_contents) return <div>Loading...</div>;

  return (
    <>
      {/* NAVIGATION BAR */}
      <FuneralCoverHeader />
      {/* NAVIGATION BAR  END*/}
      {sc_one_contents.data.map((sc_one_content) => (
        <div key={(sc_one_content.attributes.id = 1)}>
          {/* CALL INTRO SECTION START */}
          <div id="OPEN" className={styles.open_section}>
            <h1 className={styles.headline}>
              <mark className={styles.mark}>INTRODUCTION</mark>
            </h1>
          </div>

          <div className={styles.cards_content_area}>
            <div className={styles.cards}>
              <div className={styles.card}>
                <ReactMarkdown>
                  {sc_one_content.attributes.Introduction}
                </ReactMarkdown>

                <ReactMarkdown>
                  {sc_one_content.attributes.UpsellFamilyCover}
                </ReactMarkdown>
                <ReactMarkdown>
                  {sc_one_content.attributes.UpsellCoverAmount}
                </ReactMarkdown>
              </div>

              <div className={styles.card}>
                <ReactMarkdown>
                  {sc_one_content.attributes.Benefits}
                </ReactMarkdown>

                <ReactMarkdown>
                  {sc_one_content.attributes.RegulatoryStatements}
                </ReactMarkdown>

                <ReactMarkdown>
                  {sc_one_content.attributes.IdAndVerification}
                </ReactMarkdown>

                <ReactMarkdown>
                  {
                    sc_one_content.attributes
                      .ConsentToProcessPersonalInformation
                  }
                </ReactMarkdown>
              </div>

              <div className={styles.card}>
                <ReactMarkdown>
                  {sc_one_content.attributes.ExplainMainMember}
                </ReactMarkdown>

                <ReactMarkdown>
                  {sc_one_content.attributes.ExplainSpouse}
                </ReactMarkdown>

                <ReactMarkdown>
                  {sc_one_content.attributes.ExplainChildren}
                </ReactMarkdown>

                <ReactMarkdown>
                  {sc_one_content.attributes.ExplainExtendedFamily}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          <div id="APPSTART" className={styles.open_section}>
            <h1 className={styles.headline}>
              <mark className={styles.mark}>INTRODUCTION</mark>
            </h1>

            <div className={styles.card_content_area}>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <ReactMarkdown>
                    {sc_one_content.attributes.BankingDetails}
                  </ReactMarkdown>

                  <ReactMarkdown>
                    {sc_one_content.attributes.WaitingPeriod}
                  </ReactMarkdown>

                  <ReactMarkdown>
                    {sc_one_content.attributes.WatingPeriodModal}
                  </ReactMarkdown>

                  <ReactMarkdown>
                    {sc_one_content.attributes.FailureToPay}
                  </ReactMarkdown>
                </div>

                <div className={styles.card}>
                  <ReactMarkdown>
                    {sc_one_content.attributes.CoolingOffPeriod}
                  </ReactMarkdown>
                  <ReactMarkdown>
                    {sc_one_content.attributes.CoolingOffPeriod}
                  </ReactMarkdown>
                </div>

                <div className={styles.card}>
                  <ReactMarkdown>
                    {sc_one_content.attributes.DebiCheck}
                  </ReactMarkdown>
                  <ReactMarkdown>
                    {sc_one_content.attributes.DebiCheckTips}
                  </ReactMarkdown>
                </div>
                <div></div>
              </div>
            </div>

            <div id="CLOSEOUT" className={styles.open_section}>
              <h1 className={styles.headline}>
                <mark className={styles.mark}>INTRODUCTION</mark>
              </h1>
            </div>

            <div className={styles.card_content_area}>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <ReactMarkdown>
                    {sc_one_content.attributes.Notification}
                  </ReactMarkdown>
                  <ReactMarkdown>
                    {sc_one_content.attributes.Disclaimer}
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
        </div>
      ))}

      {/* <Footer />     */}
    </>
  );
}
