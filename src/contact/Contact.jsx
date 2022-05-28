import React from 'react'
import "./contact.css"


import {GrSend} from "react-icons/gr"

import {BsFillArrowUpLeftCircleFill} from "react-icons/bs"



function Contact() {


  const arrowScroll=()=>{
    window.scrollTo(0,1)
    }
    


  return (



    
  <div className="contactCon" id="contact"  >


  <div className="contactHeader"  data-aos="fade-down-left">
  <h1 class="text-primary">Contact me</h1>
  <h2 class="text-secondary">get in touch</h2>
  </div>
  
  
  <div className="contactBody" >
   <div className="map text-success" data-aos="zoom-in-right">
     <i className="ri-map-pin-line"></i>
     <h5>shwe pyi thar,Yangon</h5>
   </div>
  
   <div className="phone text-warning"  data-aos="fade-left"  >
     <i className="ri-phone-line"></i>
     <h5>+959785293156</h5>
   </div>
  
   <div className="email text-info"  data-aos="fade-right" >
     <i className="ri-mail-line"></i>
     <h5>khtet3091@gmail.com</h5>
   </div>
  
  </div>
  
  <div className="contactFooter" >
  
  <input type="text" placeholder='enter your email.....'  data-aos="fade-left"/>
  <input type="text" placeholder='enter your password...........'    data-aos="fade-left"    />
  <input type="text" placeholder='username.......'     data-aos="zoom-in-up"  />
  <textarea placeholder='comment.......'      data-aos="zoom-in-up" ></textarea>
  
  <button data-aos="zoom-in-up">send message   <GrSend className='send'  /></button> 
  
  </div>
  
  
    
  <BsFillArrowUpLeftCircleFill
onClick={arrowScroll}
   className="arrowTop"  data-aos="fade-left"/>


  </div>



  )
}

export default Contact