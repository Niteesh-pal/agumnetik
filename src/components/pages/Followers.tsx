import React from 'react'
import styles from './followers.module.css'
const Followers = () => {
  return (
    <section className={styles.follow}>
      <div className={styles.content}>
          <h1 className={styles.heading}>For followers</h1>
          <p>it really matters and then like it really doesn't matter.
            What matters is the people who are sparked by it</p>
            <div className={styles.cards}>
              <div className={styles.card_images}>
                <h3>images</h3>
                </div>
                <div className={styles.card_content}>
                  <h1>Real friends</h1>
                  <p>It really matters and then it really doesn 't matter. What matter is the </p>
                </div>
            </div>
            <div className={styles.cards}>
                <h3>images</h3>
                <div className={styles.card_content}>
                  <h1>Real communities</h1>
                  <p>It really matters and then it really doesn 't matter. What matter is the </p>
                </div>
            </div>

      </div>
      <div className={styles.image}>
        <div className={`${styles.circle} ${styles.one}`}></div>
        <img src="https://picsum.photos/350/500?grayscale" alt="" style={{borderRadius:'20px'}}/>
        <div className={`${styles.circle} ${styles.two}`}></div>
      </div>
    </section>
  )
}

export default Followers