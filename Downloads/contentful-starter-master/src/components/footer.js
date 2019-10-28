import React from 'react';
import Link from 'gatsby-link';
import styles from './footer.module.css';

export default () => (
    <div className={styles.footerBox}>
        <div>
            <Link to="/impressum/">
                <p>Impressum</p>
            </Link>
        </div>
        <div>
            <p>
                boulderboy26@gmail.com
            </p>
        </div>
    </div>
)
