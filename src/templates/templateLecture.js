import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Lecture from '../components/lecture'

const LecturePostTemplate = ({ data }) => {
  const {
    frontmatter: { title, dateStr, path, author, coverImage, excerpt, tags },
    excerpt: autoExcerpt,
    id,
    html,
  } = data.markdownRemark

  return (
    <Layout>
      <SEO title={title} description={excerpt || autoExcerpt} />
      <Lecture
        key={id}
        title={title}
        dateStr={dateStr}
        path={path}
        author={author}
        coverImage={coverImage}
        html={html}
        tags={tags}
      />
    </Layout>
  )
}

export default LecturePostTemplate

LecturePostTemplate.propTypes = {
  data: PropTypes.object.isRequired, 
}

export const lectureQuery = graphql`
  query($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        dateStr
        path
        author
        excerpt
        tags
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