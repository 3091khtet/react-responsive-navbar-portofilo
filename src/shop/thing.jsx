import {useState,useEffect} from 'react'

import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/css/bootstrap.min.css"

function Thing({shop}) {

  const [model,setModel]=useState(false);
  const [tempSrc,setTempSrc]=useState("")

const getImg=(imgSrc,tt,cat)=>{
  setTempSrc(imgSrc,tt,cat)
setModel(!model)
}
  return (
<>
<div className={model?"model open":"model"}>
<img src={tempSrc} alt="" />
<div className="ri-close-line close " onClick={model&&getImg}></div>
</div>

    <div onClick={()=>getImg(shop.image,shop.title,shop.category)} className="thingCon">
  <h5>{shop.title}</h5>
  <h5>{shop.rating.rate}</h5>
  <h5>{shop.rating.count}</h5>
  <h5>{shop.category}</h5>
  <img src={shop.image} alt="" />
     
    </div>

    </>
  )
}

export default Thing
