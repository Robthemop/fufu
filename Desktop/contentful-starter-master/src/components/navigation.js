import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Blog</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/contact/">Kontakt</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/impressum/">Impressum</Link>
      </li>
    </ul>
  </nav>
)
