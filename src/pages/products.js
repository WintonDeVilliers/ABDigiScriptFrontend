import styles from "../styles/Scripts.module.css";
import Link from "next/link";
import ProductPageHeader from "../components/ProductPageHeader";
import ReactMarkdown from "react-markdown";
// import Image from "next/image";
import React from "react";

export const getServerSideProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_URL_PRODUCT_CATALOGUE);

  const sc_one_contents = await res.json();
  console.log(sc_one_contents);
  return { props: { sc_one_contents } };
};

export default function Products({ sc_one_contents }) {
  if (!sc_one_contents) return <div>Loading ....</div>;

  return (
    <>
      <ProductPageHeader />
      {sc_one_contents.data.map((sc_one_content) => (
        <div key={sc_one_content.attributes.id}>
          <div id="LOANS" className={styles.open_section}>
            <h1 className={styles.headline}>
              <mark className={styles.mark}>LOAN PRODUCTS</mark>
            </h1>
          </div>

          <div className={styles.card_content_area}>
            <div className={styles.cards}>
              <div className={styles.card}>
                <ReactMarkdown>
                  {sc_one_content.attributes.PersonalLoans}
                </ReactMarkdown>
                <ReactMarkdown>
                  {sc_one_content.attributes.TechCredit}
                </ReactMarkdown>
              </div>

              <div className={styles.card}>
                <ReactMarkdown>
                  {sc_one_content.attributes.ConsolidationLoans}
                </ReactMarkdown>
              </div>

              <div className={styles.card}>
                <ReactMarkdown>
                  {sc_one_content.attributes.TwelvePercentLoans}
                </ReactMarkdown>
                <ReactMarkdown>
                  {sc_one_content.attributes.NCRLoans}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          <div id="CREDITCARD" className={styles.open_section}>
            <h1 className={styles.headline}>
              <mark className={styles.mark}>CREDIT CARD</mark>
            </h1>
          </div>
          <div className={styles.card_content_area}>
            <div className={styles.cards}>
              <div className={styles.card}>
                <ReactMarkdown>
                  {sc_one_content.attributes.CreditCard}
                </ReactMarkdown>
              </div>
              <div className={styles.card}>
                <ReactMarkdown>
                  {sc_one_content.attributes.CreditCardFees}
                </ReactMarkdown>
              </div>
              <div className={styles.card}>
                <ReactMarkdown>
                  {sc_one_content.attributes.CreditCardFeesMore}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          {/* <div id="BANKING" className={styles.open_section}>
            <h1 className={styles.headline}>
              <mark className={styles.mark}>BANKING</mark>
            </h1>
          </div>

          <div id="INSURANCE" className={styles.open_section}>
            <h1 className={styles.headline}>
              <mark className={styles.mark}>INSURANCE</mark>
            </h1>
          </div>

          <div id="INVESTMENTS" className={styles.open_section}>
            <h1 className={styles.headline}>
              <mark className={styles.mark}>INVESTMENTS</mark>
            </h1>
          </div> */}

          {/* DATA MAP/LOOP END */}
        </div>
      ))}
      ;
    </>
  );
}
