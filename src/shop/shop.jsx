

import {useState,useEffect} from "react"
import  "./shop.css"
import Thing from "./thing"


let url="https://fakestoreapi.com/products"

function Shop() {


    const [shop,setShop]=useState([]);
const [search,setSearch]=useState("");
const [dark,setDark]=useState(false);
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>setShop(data))
    },[shop])

    const getData=()=>{
      fetch(url).then(res=>res.json()).then(data=>setShop(data))
    }

  return (
    <div className={dark?"moonCon":"sunCon"}>

<form action="#" className="d-flex bg-info">
  
<input type="text" onKeyUp={getData} className="bg-warning "
 onChange={(e)=>setSearch(e.target.value)} value={search}/>
 <div className="ri-search-fill text-danger"></div>
</form>

<div className="darkMode d-flex" onClick={()=>setDark(!dark)} >
  {
    dark?    <div className="ri-moon-line fs-1 moon text-primary"></div>:<div className="ri-sun-line fs-1 sun text-danger"></div>
  

  }
</div>



<div className="shopCon">
  
{shop.map(x=>{
  return (
    <>
<Thing shop={x}  />



    </>
  )
})
}
</div>


    </div>
  )
}

export default Shop









