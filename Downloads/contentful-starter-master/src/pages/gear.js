import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import Navigation from '../components/navigation'
import Link from "gatsby-link";
import title from '../components/category-preview'
import Hero from "../components/hero";
import Footer from "../components/footer";

class Gear extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allContentfulArticle.edges')
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
                                <li key={node.slug}>
                                    <ArticlePreview article={node}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Gear
export const pageQuery = graphql`
  query EquipmentQuery {
 
  allContentfulArticle(filter: {category: {contentful_id: {eq:"314YasijKUE4o8yIasyK4e"} } },
  sort: { fields: [publishDate], order: DESC })
  {
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
          category {
            title
          }
          heroImage {
            sizes(maxWidth: 400, maxHeight: 400, resizingBehavior: FILL) {
             ...GatsbyContentfulSizes_tracedSVG
            }
          }
        }
      }
    }
    allContentfulPerson(filter: { id: { eq: "c3vmDTUtFqgPlNic7TBkMRw" } }) {
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
  allContentfulCategory(filter:{ contentful_id: {eq: "314YasijKUE4o8yIasyK4e" } } ) {
    edges{
      node{
        title
        }
    }
  }
}
`
