import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import heroStyles from '../components/hero.module.css'
import Link from "gatsby-link";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navigation from "../components/navigation";

class BlogPostTemplate extends React.Component {
    render() {
        const post = get(this.props, 'data.contentfulBlogPost');
        const [author] = get(this, 'props.data.allContentfulPerson.edges');

        return (
            <div className="container">
                <Hero data={author.node}/>
                <Navigation/>
                <div className="wrapper">
                    <Helmet title={'boulder boys youtube videos'}/>
                    <h2>{post.title}</h2>
                    <div className={heroStyles.p}
                         dangerouslySetInnerHTML={{
                             __html: post.body.childMarkdownRemark.html,
                         }}
                    />
                </div>
                <Footer/>
            </div>
        )
    }
}

export default BlogPostTemplate
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      
      category{
        title
      }
      
      heroImage {
        sizes(maxWidth: 1180, background: "rgb:255255") {
          ...GatsbyContentfulSizes_tracedSVG
        }
      }
      
      body {
        childMarkdownRemark {
          html
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