import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import Navigation from '../components/navigation'
import Hero from '../components/hero'


class Contact extends React.Component {


    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allContentfulBlogPost.edges')
        const [author] = get(this, 'props.data.allContentfulPerson.edges')

        return (
            <div style={{background: '#FFF'}}>
                <Helmet>
                    <title>Boulder Boys - Kontakt</title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Tritt in Kontakt" />
                </Helmet>
                <div style={{textAlign: 'justify'}}>

                    <Navigation/>

                    <div className="wrapper">

                        <div><a href={"https://www.youtube.com/channel/UC_wsnYRs8E7Z_ezOKIOfgow"}
                                style={{textDecoration: "none"}}><h3>Du kannst mir hier eine Nachricht auf YouTube schicken</h3></a></div>
                        <a href={"https://www.instagram.com/boulderboys.de/"}
                           style={{textDecoration: "none"}}><h3>und hier klicken, um mir bei Instagram eine PM zu schreiben.</h3></a>
                        <h3>Oder gib deine Nachricht einfach hier ein und ich erhalten eine Mail</h3>

                        <form
                            name="contact-form"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                        >

                            <div><input name="name" placeholder="name" type="text"/></div>

                            <div style={{marginTop: 10}}><input name="email" placeholder="name@name.com" type="email"/>
                            </div>

                            <div style={{marginTop: 10}}><textarea name="message"/></div>

                            <div style={{marginTop: 10}}><input
                                name="stimmt zu"
                                type="checkbox"
                            />

                                <label>
                                    Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich stimme zu, dass meine
                                    Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und
                                    gespeichert werden.
                                    Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an
                                    1robinhess@gmail.com widerrufen.
                                </label></div>

                            <div style={{marginTop: 10}}></div>

                            <div data-netlify-recaptcha="true"></div>

                            <p>
                                <button type="submit">abschicken</button>
                            </p>

                        </form>

                        <Link to="/kategorien/"
                              style={{textDecoration: 'none'}}>
                            <h2 className="section-bottomLine">Alle Kategorien anzeigen</h2>
                        </Link>

                        <div>

                            <a href="https://www.bergfreunde.de/?pid=16093&_$ja=tsid:52154"
                               title="Ausrüstung für Klettern, Bergsport und Outdoor bei Bergfreunde.de kaufen"
                               rel="nofollow"
                               target="_blank">
                                <img src="https://www.bergfreunde-partner.de/banner/DE/DE_AF_Banner_728x90.jpg"
                                     alt="Ausrüstung für Klettern, Bergsport und Outdoor bei Bergfreunde.de kaufen"
                                     border="0" /></a>
                            <img src="https://partner.bergfreunde.de/go.cgi?pid=16093&wmid=30&cpid=1&prid=1&subid=&view=1"
                                 height="1"
                                 width="1"
                                 border="0" />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact

export const pageQuery = graphql`
  query ContactQuery {
    allContentfulPerson(filter: { id: { eq: "c6JKKjih2XjAeggsVNbWGrb" } }) {
      edges {
        node {
          name
          heroImage: image {
            sizes(
              maxWidth: 3728
              maxHeight: 2376
              resizingBehavior: PAD
              background: "rgb:FFFFFF"
            ) {
              ...GatsbyContentfulSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`
