import Footer from "@/components/Footer";
import React from "react";
import styles from "../styles/Home.module.css";
import HomePageHeader from "@/components/HomePageHeader";
import ReactMarkdown from "react-markdown";
import nbstyles from "../styles/NoticeBoard.module.css";

export const getServerSideProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_URL_NOTICEBOARD);
  const data = await res.json();
  console.log(data);
  return { props: { sc_one_contents: data.data } };
};

export default function Home({ sc_one_contents }) {
  if (!sc_one_contents || !Array.isArray(sc_one_contents))
    return <div>Loading...</div>;

  // Extract keys dynamically based on the first item in the array
  const keys = Object.keys(sc_one_contents[0].attributes.NoticeBoardJSON);

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
                  {sc_one_contents.map((item, rowIndex) => (
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
