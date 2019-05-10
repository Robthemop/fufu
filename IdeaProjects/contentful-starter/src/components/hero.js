import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({data}) => (
    <div className={styles.hero}>
        <a href="https://www.youtube.com/channel/UC_wsnYRs8E7Z_ezOKIOfgow"
           target="_blank">
        <Img className={styles.heroImage} alt={data.name} sizes={data.heroImage.sizes}/>
        <div className={styles.heroDetails}>
            <h3 className={styles.heroHeadline}>{data.name}</h3>
            <p className={styles.heroTitle}>{data.title}</p>
        </div>
        </a>
    </div>
)
