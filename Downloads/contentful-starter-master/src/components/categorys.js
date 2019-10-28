import React from 'react'

import styles from './category.module.css'
import Link from "gatsby-link";

export default ({categoryData}) => (
    <div className={styles.category}>
        <Link to={`/${categoryData.title}/`}
              style={{textDecoration: 'none'}}>
            <h3 className={styles.categoryTitle}>{categoryData.title}</h3>
        </Link>
    </div>
)
