import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import Navigation from '../components/navigation'
import Footer from '../components/footer';

class RootIndex extends React.Component {
    render() {

        const [author] = get(this, 'props.data.allContentfulPerson.edges');
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const articleData = get(this, 'props.data.allContentfulArticle.edges');

        return (
            <div className="container">
                <Helmet>
                    <title>Boulder Boys</title>
                    <meta charSet="utf-8"/>
                    <meta name="description"
                          content="Boulder Boys ist ein Blog für Boulder Anfänger und Fortgeschrittene."/>
                </Helmet>
                <Hero data={author.node}/>
                <Navigation/>

                <div className="wrapper">

                    <div className="articleBox">
                        <ul className="article-list">
                            {articleData.map(({node}) => {
                                return (
                                    <li key={node.slug}>
                                        <ArticlePreview article={node}/>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <Footer/>
            </div>

        )
    }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulArticle(sort: { fields: [publishDate], order: DESC }) {
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
    allContentfulCategory(filter:{ contentful_id: {eq: "5Yqtk99s2c0YgC8QsMceGc"}}){
    edges{
      node{
        title
        }
    }
  }
  }
`