import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Research from '../components/research'

const ResearchTemplate = ({ data }) => {
  const {
    frontmatter: { title, path, excerpt },
    excerpt: autoExcerpt,    
    id,
    html,
  } = data.markdownRemark

  return (
    <Layout>
      <SEO title={title} description={excerpt || autoExcerpt} />
      <Research
        key={id}
        title={title}       
        path={path} 
        excerpt={excerpt}                        
        html={html}                        
      />
    </Layout>
  )
}

export default ResearchTemplate

ResearchTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const researchQuery = graphql`
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