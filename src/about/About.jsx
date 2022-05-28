import React from 'react'
import "./about.css"




function About() {
  return (
   
<div className="aboutCon " id="about"  >

<div className="aboutContent"  data-aos="fade-down-right" >
<h1 class="display-2  text-danger">about me</h1>
  <p className="fs-3">My developing roadMap  is to reach Mern Stack flow and so, as backend Language,I'll use to 
    learn Node (express) ,mySql for  SQl and mongoose for NoSql. 
    I prefer knowledge and experience to  salary in this field.
   
  </p>
  
  <h5 class="name fs-5 text-warning"><strong>name:</strong> Dennis Daniel</h5>
  <h5 class="quality fs-5 text-danger"><strong>Qualification:</strong>Diploma in business English and<br/> Diploma in IT</h5>
  <h5 class="language fs-5 text-success"><strong>Language:</strong>English and study Japanese</h5>
  
</div>
  
  <div class="aboutImg">
    <img  data-aos="fade-down" src="https://scontent.frgn7-2.fna.fbcdn.net/v/t1.6435-9/76956979_790645888064715_5283657819667562496_n.jpg?stp=c80.0.206.206a_dst-jpg_p206x206&_nc_cat=103&ccb=1-5&_nc_sid=da31f3&_nc_ohc=_gjf5CYCy3MAX-LVUii&_nc_ht=scontent.frgn7-2.fna&oh=00_AT8btWfNx3lWVPaw2xqJXsW_bWtW9VIwiz0OaiiIiJbLzA&oe=62933BA8"    alt="" />
    </div>

</div>
  )
}

export default About