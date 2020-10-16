import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import style from '../styles/post.module.css'

const IndexComponent = ({
  title,
  path,
  coverImage,
  excerpt,
  html,
}) => {
 
  return (
    <div className={style.post}>
      <div className={style.postContent}>
        <h1 className={style.title}>
          {excerpt ? <Link to={path}>{title}</Link> : title}
        </h1>
        
        {coverImage && (
          <Img
            fluid={coverImage.childImageSharp.fluid}
            className={style.coverImage}
          />
        )}

        {excerpt ? (
          <>
            <p>{excerpt}</p>         
          </>
        ) : (
          <>
            <div dangerouslySetInnerHTML={{ __html: html }} />            
          </>
        )}
      </div>
    </div>
  )
}

IndexComponent.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  coverImage: PropTypes.object,
  excerpt: PropTypes.string,
  html: PropTypes.string,
}

export default IndexComponent
