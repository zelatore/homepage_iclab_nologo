import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import style from '../styles/post.module.css'
import thumbImg from'../images/thumbnail.png'

const ResearchComponent = ({
  title,
  path,
  excerpt,
  html,
}) => {
 
let research1 = 'https://woohyeok-choi.github.io/blog/categories/research/posts/2017-05-01-00-00-just-in-time-health-intervention-for-prevention-of-prolonged-sedentary-behavior'
let research2 = 'https://zelatore.github.io/homepage_iclab_nologo/personalresearch'

  return (
    <div className={style.post}>
      <div className={style.postContent}>
        <h1 className={style.title}>
          {excerpt ? <Link to={path}>{title}</Link> : title}
        </h1>                              

        <div className={style.researchInfoDiv}>
            <h3>Recent Research Projects</h3>
            
            <div className={style.researchInfo}>        
                <img src={thumbImg} />         
                <div className={style.researchInfoText}>
                    <h4> Mobile Health with Data Science and Wearables </h4>
                    <p>
                     Our lab maintains the KAIST DrM health platform for collecting and visualizing mobile 
                     health data. We distributed various wearable devices such as Apple Watch, 
                     Samsung Gear S2, and Fitbit Charge and have been collecting activity tracker data (e.g., step counts ...
                    </p>   
                    <div className={style.researchLink}>
                        <a href={research1} target="_blank"> Read More → </a>
                    </div>                                                                      
                </div>
            </div>
            
        </div>
        
        <div className={style.researchInfoDiv}>
            <h3></h3>
            
            <div className={style.researchInfo}>        
                <img src={thumbImg} />         
                <div className={style.researchInfoText}>
                    <h4> Problematic Smartphone Use: Data Analytics and SW-based Intervention Services </h4>
                    <p>
                     Our lab maintains the KAIST DrM health platform for collecting and visualizing mobile 
                     health data. We distributed various wearable devices such as Apple Watch, 
                     Samsung Gear S2, and Fitbit Charge and have been collecting activity tracker data (e.g., step counts ...
                    </p>   
                    <div className={style.researchLink}>
                        <a href={research2} target="_blank"> Read More → </a>
                    </div>                                                                      
                </div>
            </div>            
        </div>

        <div className={style.researchInfoDiv}>
            <h3></h3>
            
            <div className={style.researchInfo}>        
                <img src={thumbImg} />         
                <div className={style.researchInfoText}>
                    <h4> Designing Serious Games for Well-being and Education </h4>
                    <p>
                     Our lab maintains the KAIST DrM health platform for collecting and visualizing mobile 
                     health data. We distributed various wearable devices such as Apple Watch, 
                     Samsung Gear S2, and Fitbit Charge and have been collecting activity tracker data (e.g., step counts ...
                    </p>   
                    <div className={style.researchLink}>
                        <a href={research2} target="_blank"> Read More → </a>
                    </div>                                                                      
                </div>
            </div>            
        </div>






        

        <br/><br/><br/>
        <div className={style.researchInfoDiv}>
            <h3>Past Research Projects</h3>
            
            <div className={style.researchInfo}>        
                <img src={thumbImg} />         
                <div className={style.researchInfoText}>
                    <h4> Social Q&A and Beyond </h4>
                    <p>
                    Question and answering (Q&A) sites such as Yahoo! Answers and Naver KiN facilitate knowledge sharing among users 
                    by leveraging the wisdom of crowds. Q&A sites complement existing Web search engines by supporting flexible query
                    formulation and customized...
                    </p>   
                    <div className={style.researchLink}>
                        <a href={research2} target="_blank"> Read More → </a>
                    </div>                                                                      
                </div>
            </div>
            
        </div>

        <div className={style.researchInfoDiv}>
            <h3></h3>
            
            <div className={style.researchInfo}>        
                <img src={thumbImg} />         
                <div className={style.researchInfoText}>
                    <h4> Networked Collaboration Platforms </h4>
                    <p>
                    Question and answering (Q&A) sites such as Yahoo! Answers and Naver KiN facilitate knowledge sharing among users 
                    by leveraging the wisdom of crowds. Q&A sites complement existing Web search engines by supporting flexible query
                    formulation and customized...
                    </p>   
                    <div className={style.researchLink}>
                        <a href={research2} target="_blank"> Read More → </a>
                    </div>                                                                      
                </div>
            </div>            
        </div>
      
        <div className={style.researchInfoDiv}>
            <h3></h3>
            
            <div className={style.researchInfo}>        
                <img src={thumbImg} />         
                <div className={style.researchInfoText}>
                    <h4>  Mobile (Social) Computing Systems </h4>
                    <p>
                    Question and answering (Q&A) sites such as Yahoo! Answers and Naver KiN facilitate knowledge sharing among users 
                    by leveraging the wisdom of crowds. Q&A sites complement existing Web search engines by supporting flexible query
                    formulation and customized...
                    </p>   
                    <div className={style.researchLink}>
                        <a href={research2} target="_blank"> Read More → </a>
                    </div>                                                                      
                </div>
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

ResearchComponent.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,  
  excerpt: PropTypes.string,
  html: PropTypes.string,
}

export default ResearchComponent