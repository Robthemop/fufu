import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import Navigation from '../components/navigation'
import Link from "gatsby-link";
import article from '../components/article-preview';
import styles from '../layouts/base.css'

class RootIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allContentfulBlogPost.edges')
        const [author] = get(this, 'props.data.allContentfulPerson.edges')

        return (
            <div style={{background: '#fff'}}>

                <Helmet>
                    <title>Boulder Boys - Ein Blog übers Bouldern</title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Blog und Vlog übers Bouldern für Anfänger und Fortgeschrittene"/>
                </Helmet>

            <Hero data={author.node}/>

                <Navigation/>

                <div className="wrapper">

                    <ul className="article-list">
                        {posts.map(({node}) => {
                            return (
                                <li key={node.slug}>
                                    <ArticlePreview article={node}/>
                                </li>
                            )
                        })}
                    </ul>


                    <Link to="/kategorien/"
                          style={{textDecoration: 'none'}}>
                        <h2>Alle Kategorien anzeigen</h2>
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
        )
    }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 400, maxHeight: 400, resizingBehavior: FILL) {
             ...GatsbyContentfulSizes_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
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
