import React from 'react'
import "./skill.css"



import {SiJavascript} from "react-icons/si"

import {FaBootstrap} from "react-icons/fa"

import {FaGitAlt } from "react-icons/fa"

import {SiMaterialui} from "react-icons/si"


import {FaNodeJs} from "react-icons/fa"
import {SiMongodb} from "react-icons/si"
import {SiMysql} from "react-icons/si"

import {motion} from "framer-motion"









function Skill() {
  return (
   

<div className="skillCon" id="skill" >
    <div className="skillBar" data-aos="flip-left"  >
  
      <li >
        <i className="ri-html5-line htmlIcon " id="icon"></i>
      <div className="bar"><div class="html"></div></div>
      </li>
      
      
      
      <li>
  <i className="ri-css3-line cssIcon icon"></i>
      <div className="bar"><div className="css"></div></div>
      </li>
      
      
      
      <li>
        
       <SiJavascript className="jsIcon icon"/>
      <div className="bar"><div className="js"></div></div>
      </li>
      
      
      
      <li>
    <FaBootstrap className='bsIcon  icon'/>
      <div className="bar"><div className="bs"></div></div>
      </li>
      
      
      
      
      
      <li >
      <i className="ri-reactjs-line reactIcon icon"></i>
      <div className="bar"><div className="react"></div></div>
      </li>
      
      
      <li >
      < FaGitAlt   className="gitIcon  icon"/>
      <div class="bar"><div class="git"></div></div>
      </li>
      
      
      <li >
    <    SiMaterialui className="muIcon  icon"/>
      <div class="bar"><div class="mu"></div></div>
      </li>
      
      </div>
      
      
      <hr />
     
      <div class="footerImg" >
        <div class="comingSoon" data-aos="flip-down"  >
          <h1  >study for coming soon!</h1>
          <FaNodeJs className="node"   />
        <SiMongodb className="mongoDb"   />
        <SiMysql   className="sql"     />
        </div>
          
          
    
          <div  id="carouselExampleCaptions" class="carousel slide skillImgCon" data-bs-ride="carousel"data-aos="flip-up">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://www.sololearn.com/Certificate/1014-23251833/jpg/" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>html</h5>
                
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://www.sololearn.com/Certificate/1162-23251833/jpg/" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>responsive design</h5>
                
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://www.sololearn.com/Certificate/1097-23251833/jpg/" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  <h5>react</h5>
                
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon prev" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon next" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
    
      </div>







  </div>

  )
}

export default Skill