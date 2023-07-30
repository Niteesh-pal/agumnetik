import React from 'react'
import styles from './Creator.module.css';
const Creators = () => {
  return (
   <section>
    <div className={styles.create}>
      <div className={styles.create_left}>
        <div className={styles.backGreen}>
          <img src='https://picsum.photos/seed/picsum/300/500' className={styles.image}></img>
        </div>
        {/* <div>
          <div>
            <h1>emily</h1>
            <div>cards</div>
          </div>
        </div> */}
      </div>
      <div className={styles.creator}>
        <div className={styles.heading}><h1>For Creators</h1></div>
        <div className={styles.cards}>
          
          <div className={styles.cards_content}>
          <h1>Giveaway</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, aspernatur labore alias voluptatum blanditiis delectus cupiditate iure pariatur amet nostrum natus quo doloribus beatae ut veniam in, laborum aliquam fuga.</p>
          </div>
        </div>

        <div className={styles.cards}>
          <img></img>
          <div className={styles.cards_content}>
          <h1>Email List</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, aspernatur labore alias voluptatum blanditiis delectus cupiditate iure pariatur amet nostrum natus quo doloribus beatae ut veniam in, laborum aliquam fuga.</p>
          </div>
        </div>
        <div className={styles.cards}>
          <img></img>
          <div className={styles.cards_content}>
          <h1>Concierge</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, aspernatur labore alias voluptatum blanditiis delectus cupiditate iure pariatur amet nostrum natus quo doloribus beatae ut veniam in, laborum aliquam fuga.</p>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Creators