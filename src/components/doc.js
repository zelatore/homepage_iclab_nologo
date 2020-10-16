import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import style from '../styles/post.module.css'

const Doc = ({
  title,
  path,
  excerpt,
  html,
}) => {
  
  return (
    <div className={style.post}>
      <div className={style.postContent}>
        <h1 className={style.title}>
          {excerpt ? <Link to={path}>{title}</Link> : title}
        </h1>    

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

Doc.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  excerpt: PropTypes.string,
  html: PropTypes.string,
}

export default Doc
