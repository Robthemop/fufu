import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import Navigation from '../components/navigation'
import Link from "gatsby-link";
import Hero from "../components/hero";
import Footer from "../components/footer";


class Interviews extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allContentfulInterviews.edges')
        const [author] = get(this, 'props.data.allContentfulPerson.edges');
        return (
            <div className="container">
                <Helmet title={siteTitle}/>
                <Hero data={author.node}/>
                <Navigation/>
                <div className="wrapper">
                    <Link to="/kategorien/"
                          style={{textDecoration: 'none'}}>
                        <h2 className="section-headline">Alle Kategorien anzeigen</h2>
                    </Link>
                    <ul className="article-list">
                        {posts.map(({node}) => {
                            return (
                                <li key={node.slug}><ArticlePreview article={node}/></li>
                            )
                        })}
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Interviews

export const pageQuery = graphql`
  query Interviewquery {
  allContentfulInterviews(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          description {
            childMarkdownRemark {
              html
            }
          }
          heroImage {
            sizes(maxWidth: 400, maxHeight: 400, resizingBehavior: FILL) {
             ...GatsbyContentfulSizes_tracedSVG
            }
          }
        }
      }
    }
    allContentfulPerson(filter: { id: { eq: "c76bZzIBVO5BOQNfdA6fFY" } }) {
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
    allContentfulCategory(filter:{ contentful_id: {eq: "6lhQvF4Tmmw73IBciHcxqu" }}){
    edges{
      node{
        title
        }
    }
  }
  }
`
