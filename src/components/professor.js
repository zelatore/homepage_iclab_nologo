import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import style from '../styles/post.module.css'
import profImg from'../images/professor.png'

const ProfessorComponent = ({
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

        <div className={style.profImgDiv}>
            <div>
                {coverImage && (
                    <img src={profImg} />
                )}
            </div>
            <div className={style.profIntro}>
                <h2> Uichin Lee &nbsp;(이의진)</h2>
                <p>
                    Associate Professor <br/>
                    Dept. of Computer Science, KAIST <br/>
                    (Korea Advanced Institute of Science and Technology) <br/>
                    291 Daehak-ro, Yuseong-gu, Daejeon <br/> 
                    305-701, Republic of Korea <br/><br/>
                    Phone: 82-42-350-1616 <br/>
                    Fax: 82-42-350-1610 <br/>
                    Email: uclee@kaist.ac.kr <br/>                   
                </p>
                
            </div>

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

ProfessorComponent.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  coverImage: PropTypes.object,
  excerpt: PropTypes.string,
  html: PropTypes.string,
}

export default ProfessorComponent