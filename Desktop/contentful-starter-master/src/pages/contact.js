import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'

class Contact extends React.Component {


  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (

  <div>
  <h1>Kontakt</h1>
  <p>Hast du Fragen?</p>
  <p>Du kannst mir hier eine sofort-Nachicht schicken</p>
  <form
    name="contact-form"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >

    <div><input name="name" placeholder="Your Name" type="text" /></div>
    <div style={{marginTop: 10}}><input name="email" placeholder="name@name.com" type="email" /></div>
    <div style={{marginTop: 10}}><textarea name="message" /></div>
    <div style={{marginTop: 10}}><input
            name="stimmt zu"
            type="checkbox"
             />
             <label>
             Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden.
             Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an 1robinhess@gmail.com widerrufen.
<            /label></div>
    <div style={{marginTop: 10}}></div>
    <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit">Send</button>
  </p>

  </form>
  <div style={{marginTop: 25}}>
  <Link to="/">Bring mich zum Blog</Link>
  </div>
        </div>
      )
  }
}

export default Contact
