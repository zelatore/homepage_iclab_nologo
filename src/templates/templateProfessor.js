import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Professor from '../components/professor'

const ProfessorTemplate = ({ data }) => {
  const {
    frontmatter: { title, path, coverImage, excerpt },
    excerpt: autoExcerpt,    
    id,
    html,
  } = data.markdownRemark

  return (
    <Layout>
      <SEO title={title} description={excerpt || autoExcerpt} />
      <Professor
        key={id}
        title={title}       
        path={path}  
        coverImage={coverImage}                      
        html={html}                        
      />
    </Layout>
  )
}

export default ProfessorTemplate

ProfessorTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const professorQuery = graphql`
  query($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title       
        path        
        excerpt     
        coverImage {
            childImageSharp {
              fluid(maxWidth: 400) {
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