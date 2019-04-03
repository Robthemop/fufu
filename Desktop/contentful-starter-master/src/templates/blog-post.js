import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Navigation from '../components/navigation'


import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
    <div style={{ background: '#FFF' }}>
    <Navigation />
        <Helmet title={`${post.title} | ${post.category.title}`} />
        <div className={heroStyles.hero}>
          <Img className={heroStyles.heroImage} alt={post.title} sizes={post.heroImage.sizes} />
        </div>
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <h1>
              {post.category.title}
          </h1>
          <p>
              {post.publishDate}
          </p>
          <div className={heroStyles.p}
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
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
  }
`
