import React,{useState} from 'react'
import "./port.css"
import Home from "./home/Home"
import About from "./about/About"
import Skill from "./skill/Skill"
import Contact from "./contact/Contact"
import Service from "./service/Service"



import {FcReddit} from "react-icons/fc"


import {BsFillSunFill} from "react-icons/bs"
import {RiMoonClearLine} from "react-icons/ri"

import Aos from "aos"





function Port() {

const [side,setSide]=useState(false)

const sideBar=()=>{
  setSide(!side)
}

Aos.init()

const [dark,setDark]=useState(false)

const darkMode=()=>{
  setDark(!dark)
}






  return (
    <>
    
    
    <nav className="navbar navbar-expand-lg bg-light">

<div className="container-fluid">

<a href="#" className="navbar-brand fs-3 d-flex align-items-center" ><FcReddit className="display-4"/>DD</a>


<div className="darkContent" onClick={darkMode}>
{dark?<RiMoonClearLine className='moon fs-1'/>:<BsFillSunFill className='sun fs-1'/>}
</div>


<div className={side?"navbar-nav navbarMove":"navbar-nav"} onClick={side&&sideBar}  >
    <a href="#home" className="nav-link fs-3">home</a>
    <a href="#about"  className="nav-link  fs-3">about</a>
    <a href="#skill"   className="nav-link  fs-3">skill</a>
    <a href="#service"   className="nav-link  fs-3">service</a>
    <a href="#contact"  className="nav-link  fs-3">contact</a>
</div>


<div className="burger " onClick={sideBar}>
  <div className={side?"one oneActive":"one"}></div>
  <div className={side?"two twoActive":"two"}></div>
  <div className={side?"three threeActive":"three"}></div>
</div>



</div>
    </nav>


    
   <div className={dark?"night":"white"}>

<div className={side?"lightDark":"whiteDark"}>




<Home/>
<About/>
<Skill/>
<Service/>
<Contact/>



</div>


       
   </div>
    
    
    </>
  )
}

export default Port