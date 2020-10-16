import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Doc from '../components/doc'

const DocTemplate = ({ data }) => {
  const {
    frontmatter: { title, path, excerpt },
    excerpt: autoExcerpt,
    id,
    html,
  } = data.markdownRemark

  return (
    <Layout>
      <SEO title={title} description={excerpt || autoExcerpt} />
      <Doc
        key={id}
        title={title}       
        path={path}                
        html={html}                        
      />
    </Layout>
  )
}

export default DocTemplate

DocTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const docsQuery = graphql`
  query($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title       
        path        
        excerpt              
      }
      id
      html
      excerpt
    }
  }
`
