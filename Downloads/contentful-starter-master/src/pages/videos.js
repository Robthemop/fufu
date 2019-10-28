import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import Footer from "../components/footer";

class Videos extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allContentfulBlogPost.edges')
        const [author] = get(this, 'props.data.allContentfulPerson.edges');

        return (
            <div className="container">
                <Helmet title={siteTitle}/>
                <Hero data={author.node}/>
                <Navigation/>
                <div className="wrapper">
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Videos
export const pageQuery = graphql`
  query VideosQuery {
  allContentfulBlogPost(filter: {category: {contentful_id: {eq:"14c67jI28WqjAFNfWTgUbP"} } },
  sort: { fields: [publishDate], order: DESC })
  {
  
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
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
    allContentfulCategory(filter:{ contentful_id: {eq: "14c67jI28WqjAFNfWTgUbP"}}){
    edges{
      node{
        title
        }
    }
  }
  }
`
