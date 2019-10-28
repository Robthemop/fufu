import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styles from './category-preview.module.css'

export default ({category}) => (

    <div className={styles.preview}>
        <Link to={`/${category.title}/`} style={{textDecoration: 'none'}}>
        <h3 className={styles.categoryTitle}>
                {category.title}
        </h3>
        </Link>
    </div>
)
