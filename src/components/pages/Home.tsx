import React from 'react'
import styles from './Home.module.css';
const Home = () => {
  return (
    <section >
        <div className={styles.container}>
            <div className={styles.data}>
                <div className={styles.data_heading}>
                    <h1>Crush it together <br/>real <span className={styles.green}>friends,</span> <br/>real <span className={styles.cyan}>Communities</span></h1>
                </div>
                <div>
                <p className={styles.para}>Join exciting communities. Meet new IG friends,<br/><span className={styles.cyan}>accept challenges</span>, and <span className={styles.green}>crush your goals together.</span></p>
                </div>
                <div className={styles.button}>
                    <div className={styles.btn1 }>For creators</div>
                    <div className={styles.btn2}>For followers</div>
                </div>
                <div className={styles.opt}>
                    {/* <svg></svg> */}
                    <p style={{fontSize:"14px"}}>For users who want to challenge <br/>their followers with <span className={styles.cyan}>fun challenges</span></p>
                </div>
            </div>
            <div className={styles.media}>
                
                <div className={styles.image}>
                    <img src='https://picsum.photos/seed/picsum/300/600'></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home