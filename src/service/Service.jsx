import "./service.css"

import {FcAdvertising} from "react-icons/fc"
import {FcEngineering} from "react-icons/fc"
import {FcPhoneAndroid} from "react-icons/fc"
import Typography from "@mui/material/Typography"

export default function Service(){

return(
  


<div className=" serviceCon" id="service">

<Typography variant="h3" className="text-info" data-aos="zoom-in-up">OurService</Typography>
<p className="fs-5"  data-aos="flip-right"> And I'll promise to try as much as I can . 
    Now I regularly take concerntation on React(Material UI)
    BootStrap,Vanilla pure JS,and responisve website,and also have a study little taste on Jquery a bit,and then, I have planed to continue for React Native,Next.js, and flutter for coming framework.
    I'll enthusiastically take the responsibility for junior React webDeveloper.</p>


    <div class="container">
  <div class="row">




    <div class="col" data-aos="fade-up-right">



    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />

<div className="advertise d-flex align-items-center">
    
<FcAdvertising  className="display-2"/>
<h4 >WebDevelopement</h4>
</div>

    </div>



    <div class="col" data-aos="fade-up-left">
    <img src="https://media.istockphoto.com/photos/portrait-of-smiling-diverse-people-raising-hands-at-seminar-picture-id1342228491?k=20&m=1342228491&s=612x612&w=0&h=NElwUOCG-JswWKnm7Kk-28EAyxv1TxwOMU6iP9YneNs=" alt="" />


<div className="advertise d-flex align-items-center">
    
<FcEngineering   className="display-2"/>
<h4 >WebDesign</h4>
</div>

    </div>




    <div class="col"  data-aos="flip-down">
    <img src="https://media.istockphoto.com/photos/multiethnic-colleagues-sitting-at-desk-looking-at-laptop-computer-in-picture-id1322139094?k=20&m=1322139094&s=612x612&w=0&h=zrwQ1iT_HJv_opa7XggRUZtMaIvs3_xO1eYMs6Qo11A=" alt="" />

<div className="advertise  d-flex align-items-center ">

<FcPhoneAndroid   className="display-2"/>
<h4 >AppDevelopement</h4>
</div>

    </div>




  </div>
</div>





</div>





   
)




}

