import React from 'react'
import Img from 'gatsby-image'

import styles from './picture.module.css'

export default ({data}) => (
    <div className={styles.picture}>
        <Img className={styles.pictureImg} alt={data.name} sizes={data.heroImage.sizes}/>
    </div>
)
