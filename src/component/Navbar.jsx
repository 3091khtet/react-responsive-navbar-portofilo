import React,{useState} from 'react'
import "./Navbar.css"
import "./home.css"
import "./about.css"
import "./skill.css"
import "./contact.css"
import "bootstrap/dist/css/bootstrap.css"




import {RiMoonClearFill} from "react-icons/ri"
import {FaSun} from "react-icons/fa"

import Type from "typewriter-effect"



import {SiJavascript} from "react-icons/si"

import {FaBootstrap} from "react-icons/fa"

import {FaGitAlt } from "react-icons/fa"

import {SiMaterialui} from "react-icons/si"


import {FaNodeJs} from "react-icons/fa"
import {SiMongodb} from "react-icons/si"
import {SiMysql} from "react-icons/si"

import {motion} from "framer-motion"


import {GrSend} from "react-icons/gr"

import {BsFillArrowUpLeftCircleFill} from "react-icons/bs"



function Navbar (){






const [burger,setBurger]=useState(false)


const newBurger=()=>{
setBurger(!burger)
}

const [dark,setDark]=useState(false)

const darkMode=()=>{
    setDark(!dark)
}

const scrollTop=()=>{
  window.scrollTo(0,1)
}





    return(
        <>
   <nav className='d-flex'>
    
    <h1>My protfoilo</h1>


<div className="darkContent" onClick={darkMode}>
  {dark?  <RiMoonClearFill className='display-4 moon'/>:
  <FaSun className='display-4 sun'/>}
</div>


       <div className="menuTab">
           <a href="#home">home</a>
           <a href="#about">about</a>
           <a href="#skill">skill</a>
           <a href="#contact">contact</a>
       </div>
       

<button onClick={newBurger} className="burger btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
{burger?<i className="ri-close-line display-4 "></i>:<i className="ri-menu-line display-4 "></i>}
  </button>



</nav>     
        
  


<div className={dark?"night":"white"} onClick={darkMode}></div>



  
<div onClick={burger&&newBurger}
  className={burger?"collapse burgerContent":"burgerKept"} id="collapseExample">
<a href="#home">home</a>
           <a href="#about">about</a>
           <a href="#skill">skill</a>
           <a href="#contact">contact</a>
</div>
        

<div className={burger?"lightDark":"whiteDark"} onClick={burger&&newBurger}>







<section className="mainContent">


<div 



className="homeCon" id="home" data-aos="fade-right"> 
  
  <div 
  
  
  className="homeContent"  data-aos="fade-left">
    <h1 className='display-5'  data-aos="fade-right">Hello! I'm a</h1>
    <h1 className="type display-3"  data-aos="fade-down">
    <Type 
  options={{
    strings: [" react Developer"," frontEndDeveloper","MernStackDeveloper"],
    autoStart: true,
    loop: true,
  }}
/>
      
      
       </h1>
    <h1  >passionate on IT and CS</h1>
    <p className="firstP fs-2"  data-aos="fade-up-left">I have been studying frontEnd Developing since last year(2021) and passionate on the web,android,desktop,window app in
      this field.
    </p>
    
    </div>
    
   
    <img 
     data-aos="fade-up-left"
    src="https://scontent.frgn7-3.fna.fbcdn.net/v/t1.6435-9/136513663_1114826588979975_2738913944826466707_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=100&ccb=1-5&_nc_sid=da31f3&_nc_ohc=Yuw5ARQGNf4AX9tjiXG&tn=J6NrcZG2LTnox3zA&_nc_ht=scontent.frgn7-3.fna&oh=00_AT8nOPSu5LyIVsXgSlz0zxFqqt_KCgNfNCnTtgMxsO7FkQ&oe=62949DAD" alt=""/>   
    
</div>





<div className="aboutCon " id="about"  data-aos="fade-down-right">

<div className="aboutContent"  data-aos="fade-down-right">
<h1 class="display-2  text-danger">about me</h1>
  <p className="fs-3">My developing roadMap  is to reach Mern Stack flow and so, as backend Language,I'll use to 
    learn Node (express) ,mySql for  SQl and mongoose for NoSql. 
    I prefer knowledge and experience to  salary in this field.
    And I'll promise to try as much as I can . 
    Now I regularly take concerntation on React(Material UI)
    BootStrap,Vanilla pure JS,and responisve website,and also have a study little taste on Jquery a bit,and then, I have planed to continue for React Native,Next.js, and flutter for coming framework.
    I'll enthusiastically take the responsibility for junior React webDeveloper.
  </p>
  
  <h5 class="name fs-3"><strong>name:</strong> Dennis Daniel</h5>
  <h5 class="quality fs-3"><strong>Qualification:</strong>Diploma in business English and<br/> Diploma in IT</h5>
  <h5 class="language fs-3"><strong>Language:</strong>English and study Japanese</h5>
  
</div>
  
  <div class="aboutImg"  data-aos="flip-left">
    <img src="https://scontent.frgn7-2.fna.fbcdn.net/v/t1.6435-9/76956979_790645888064715_5283657819667562496_n.jpg?stp=c80.0.206.206a_dst-jpg_p206x206&_nc_cat=103&ccb=1-5&_nc_sid=da31f3&_nc_ohc=_gjf5CYCy3MAX-LVUii&_nc_ht=scontent.frgn7-2.fna&oh=00_AT8btWfNx3lWVPaw2xqJXsW_bWtW9VIwiz0OaiiIiJbLzA&oe=62933BA8"    alt="" />
    </div>

</div>





<div className="skillCon" id="skill"  
   >
    <div className="skillBar"v data-aos="zoom-in-up"   >
  
      <li data-aos="fade-left">
        <i className="ri-html5-line htmlIcon skillSubject"></i>
      <div className="bar"><div class="html"></div></div>
      </li>
      
      
      
      <li data-aos="fade-left">
  <i className="ri-css3-line cssIcon skillSubject"></i>
      <div className="bar"><div className="css"></div></div>
      </li>
      
      
      
      <li data-aos="fade-left">
        
       <SiJavascript className="jsIcon"/>
      <div className="bar"><div className="js"></div></div>
      </li>
      
      
      
      <li data-aos="fade-left">
    <FaBootstrap className='bsIcon'/>
      <div className="bar"><div className="bs"></div></div>
      </li>
      
      
      
      
      
      <li data-aos="fade-right">
      <i className="ri-reactjs-line reactIcon skillSubject"></i>
      <div className="bar"><div className="react"></div></div>
      </li>
      
      
      <li data-aos="fade-right">
      < FaGitAlt   className="gitIcon"/>
      <div class="bar"><div class="git"></div></div>
      </li>
      
      
      <li data-aos="fade-right">
    <    SiMaterialui className="muIcon"/>
      <div class="bar"><div class="mu"></div></div>
      </li>
      
      </div>
      
      
      <hr />
     
      <div class="footerImg" >
        <div class="comingSoon"  data-aos="fade-up-left" >
          <h1  data-aos="flip-up">study for coming soon!</h1>
          <FaNodeJs className="node"    data-aos="flip-up"/>
        <SiMongodb className="mongoDb"  data-aos="flip-up"  />
        <SiMysql   className="sql"    data-aos="flip-up" />
        </div>
          
          
    
          <div  data-aos="fade-down-left" id="carouselExampleCaptions" class="carousel slide skillImgCon" data-bs-ride="carousel">
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


  

  <div className="contactCon" id="contact"   data-aos="flip-up">

<div className="contactHeader" data-aos="zoom-in-up">
<h1 class="text-primary">Contact me</h1>
<h2 class="text-secondary">get in touch</h2>
</div>


<div className="contactBody" data-aos="zoom-in-down">
 <div className="map text-success"  data-aos="fade-down-right">
   <i className="ri-map-pin-line"></i>
   <h5>shwe pyi thar,Yangon</h5>
 </div>

 <div className="phone text-warning"   data-aos="fade-down-right">
   <i className="ri-phone-line"></i>
   <h5>+959785293156</h5>
 </div>

 <div className="email text-info"  data-aos="fade-down-right">
   <i className="ri-mail-line"></i>
   <h5>khtet3091@gmail.com</h5>
 </div>

</div>

<div className="contactFooter"  data-aos="fade-left">

<input type="text" placeholder='enter your email.....' data-aos="zoom-in-right"/>
<input type="text" placeholder='enter your password...........'       />
<input type="text" placeholder='username.......'      />
<textarea placeholder='comment.......'      ></textarea>

<button>send message   <GrSend className='send'/></button> 

</div>



</div>

<BsFillArrowUpLeftCircleFill className="arrowTop" onClick={scrollTop}/>
</section>








</div>


        </>
    )
}


export default Navbar