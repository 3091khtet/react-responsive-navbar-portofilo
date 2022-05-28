import React from 'react'
import "./home.css"
import Type from "typewriter-effect"



function Home() {
  return (
  


<div 



className="homeCon" id="home" > 
  
  <div  className="homeContent"  data-aos="fade-up" >
    <h1 className='display-5' >Hello! I'm a</h1>
    <h1 className="type display-5" >
    <Type 
  options={{
    strings: [" react Developer"," frontEndDeveloper","MernStackDeveloper"],
    autoStart: true,
    loop: true,
  }}
/>
      
      
       </h1>
    <h1  >passionate on IT and CS</h1>
    <p className="firstP fs-3" >I have been studying frontEnd Developing since last year(2021) and passionate on the web,android,desktop,window app in
      this field.
    </p>
    
    </div>
    
   
    <img 
    data-aos="fade-down-left"
    src="https://scontent.frgn7-3.fna.fbcdn.net/v/t1.6435-9/136513663_1114826588979975_2738913944826466707_n.jpg?stp=c0.23.206.206a_dst-jpg_p206x206&_nc_cat=100&ccb=1-5&_nc_sid=da31f3&_nc_ohc=Yuw5ARQGNf4AX9tjiXG&tn=J6NrcZG2LTnox3zA&_nc_ht=scontent.frgn7-3.fna&oh=00_AT8nOPSu5LyIVsXgSlz0zxFqqt_KCgNfNCnTtgMxsO7FkQ&oe=62949DAD" alt=""/>   
    
</div>



  )
}

export default Home