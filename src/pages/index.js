import Footer from "@/components/Footer";
import React from "react";
import styles from "../styles/Home.module.css";
import HomePageHeader from "@/components/HomePageHeader";
import ReactMarkdown from "react-markdown";
import nbstyles from "../styles/NoticeBoard.module.css";

/*  getServerSideProps: func will await response from strapi CRM */
export const getServerSideProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_URL_NOTICEBOARD);
  const data = await res.json();
  console.log(data);
  return { props: { strapi_res_data: data.data } };
};

export default function Home({ strapi_res_data }) {
  if (!strapi_res_data || !Array.isArray(strapi_res_data))
    return <div>Loading...</div>;

  // Extracting keys dynamically based on the first item in the array to allow for arbitrary number of table content in Strapi
  const keys = Object.keys(strapi_res_data[0].attributes.NoticeBoardJSON);

  return (
    <>
      <div className={styles.container}>
        <HomePageHeader />
        <div className={styles.main}>
          <div className={styles.main_content}>
            <h1 className={styles.headline}>Notice Board</h1>
            <div className={nbstyles.table_container}>
              <table className={nbstyles.table}>
                <thead>
                  <tr>
                    <th scope="col">Topic</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {strapi_res_data.map((item, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                      {keys.map((key, columnIndex) => (
                        <tr key={`${rowIndex}-${key}`}>
                          <td className={nbstyles.topic}>{key}</td>
                          <td style={{ whiteSpace: "pre-line" }}>
                            {item.attributes.NoticeBoardJSON[key] || ""}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            {/* TABLE CONTAINER END */}
          </div>
        </div>
      </div>
    </>
  );
}
