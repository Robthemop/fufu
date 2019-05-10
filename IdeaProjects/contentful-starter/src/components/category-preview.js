import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styles from './category-preview.module.css'
let catTitle="";
const booly = true;

export default ({category}) => (


    <div className={styles.preview}>

        <Link to={`/${category.title}/`} style={{textDecoration: 'none'}}>
            <Img alt="" sizes={category.categoryImage.sizes}>
            </Img>
        </Link>

        <h3 className={styles.categoryTitle}>
            <Link to={`/${category.title}/`} style={{textDecoration: 'none'}}>
                {category.title.substring(9, category.title.size)}
            </Link>
        </h3>


    </div>
)
