import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { toKebabCase } from '../helpers'
import researchImg from'../images/introduction_sample1.png'

import style from '../styles/post.module.css'

const PersoanResearch = ({
  title,
  dateStr,
  path,
  coverImage,
  author,
  excerpt,
  tags,
  html,
}) => {

  return (
    <div className={style.post}>
      <div className={style.postContent}>
        <h1 className={style.title}>
          {excerpt ? <Link to={path}>{title}</Link> : title}
        </h1>
        <div className={style.meta}>
          {dateStr} {author && <>— Written by {author}</>}
          {tags ? (
            <div className={style.tags}>
              {tags.map(tag => (
                <Link to={`/tag/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
                  <span className={style.tag}>#{tag}</span>
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <div className={style.coverImage}>
            {coverImage && (
                <img src={researchImg} />
            )}
        </div>

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

PersoanResearch.propTypes = {
  title: PropTypes.string,
  dateStr: PropTypes.string,
  path: PropTypes.string,
  coverImage: PropTypes.object,
  author: PropTypes.string,
  excerpt: PropTypes.string,
  html: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default PersoanResearch