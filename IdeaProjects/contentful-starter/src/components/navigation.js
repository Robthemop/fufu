import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'
import {css, cx} from 'emotion'

const color = '#F1582A'


export default () => (

    <nav role="navigation">
        <ul className={styles.navigation}>

            <li className={css`
                display: inline-flex;
                align-items: center;
                margin: 0 1em;
                &:hover {
                color: ${color};
            }
                `}
            >
                <Link exact to="/"
                      activeStyle={{color: "#F1582A"}}
                      partiallyActive={true}
                      style={{textDecoration: 'none'}}
                >
                    <b>/</b>
                </Link>
            </li>

            <li className={css`
                display: inline-flex;
                align-items: center;
                margin: 0 1em;
                &:hover {
                color: ${color};
            }
                `}>
                <Link to="/kategorien/"
                      activeStyle={{color: "#F1582A"}}
                      style={{textDecoration: 'none'}}
                >
                    <b>kategorien</b>
                </Link>
            </li>



            <li className={css`
                display: inline-flex;
                align-items: center;
                margin: 0 1em;
                &:hover {
                color: ${color};
            }
                `}>
                <Link to="/contact/"
                      activeStyle={{color: "#F1582A"}}
                      style={{textDecoration: 'none'}}
                >
                    <b>kontakt</b>
                </Link>
            </li>

            <li className={css`
                display: inline-flex;
                align-items: center;
                margin: 0 1em;
                &:hover {
                color: ${color};
            }
                `}>

                <Link to="/impressum/"
                      activeStyle={{color: "#F1582A"}}
                      partiallyActive={true}
                      style={{textDecoration: 'none'}}
                >
                    <b>impressum</b>
                </Link>
            </li>

            <li className={css`
                display: inline-flex;
                align-items: center;
                margin: 0 1em;
                &:hover {
                color: ${color};
            }
                `}>
                <a href="https://www.youtube.com/channel/UC_wsnYRs8E7Z_ezOKIOfgow"
                   target="_blank"
                   style={{textDecoration: 'none'}}>
                    <b>YT</b>
                </a>
            </li>

            <li className={css`
                display: inline-flex;
                align-items: center;
                margin: 0 1em;
                &:hover {
                color: ${color};
            }
                `}>
                <a href="https://www.instagram.com/boulderboys.de/"
                   target="_blank"
                   style={{textDecoration: 'none'}}>
                    <b>IG</b>
                </a>
            </li>

        </ul>
    </nav>
)
