import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Index from '../components/index'

const IndexTemplate = ({ data }) => {
  const {
    frontmatter: { title, path, coverImage, excerpt },
    excerpt: autoExcerpt,
    id,
    html,
  } = data.markdownRemark

  return (
    <Layout>
      <SEO title={title} description={excerpt || autoExcerpt} />
      <Index
        key={id}
        title={title}       
        path={path}                
        coverImage={coverImage}
        html={html}                        
      />
    </Layout>
  )
}

export default IndexTemplate

IndexTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const indexQuery = graphql`
  query($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title       
        path        
        excerpt
        coverImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }              
      }
      id
      html
      excerpt
    }
  }
`
