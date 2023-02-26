import Footer from "@/components/Footer"
import styles from '../styles/Home.module.css'
import Header from "@/components/Header"


export default function Home() {
  return (
    <>
     
     <div className={styles.container}>
          <Header />
      <div className={styles.main}>
      <div className={styles.main_content}>

       <h1 className={styles.headline}>Audacity to Believe</h1>
          <h4 className={styles.headline_2}>Where we come from...</h4>
          <div>
            <p className={styles.second_description}>
              “You cannot take away that the bank was founded in the context of 1964 when it was not even possible to think of an idea like this, 
              never mind the challenge of raising the money.
              But they had an audacious spirit and the audacity to believe.."
            </p>
          </div>
          <h4 className={styles.headline}>Digital Call Script</h4>
          <div>
            <p className={styles.second_description}>
              The Proposed project aims to digitize sales call flow scripts to improve both agent and 
            	customer experience during client onboarding process.
            </p>
          </div>
      </div>
      <div className={styles.main_img}>
      <img src="/ab.png" alt="pic here" />
      </div>
        </div>
      <Footer />
      </div>

    </>
  )
}
