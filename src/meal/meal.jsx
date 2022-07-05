import {useState,useEffect} from 'react'
import Item from "./item"

import Food from "./food"
import  "./meal.css"
import "bootstrap/dist/css/bootstrap.min.css"




function Meal (){



  const [url,setUrl]=useState(`
  https://www.themealdb.com/api/json/v1/1/search.php?f=a`);

const [foodData,setFoodData]=useState()



useEffect(()=>{
  fetch(url).then((res)=>res.json()).then((data)=>setFoodData(data.meals));

},[url])


const loopAlpha=(alphaString)=>{
  setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alphaString}`)
}


const [search,setSearch]=useState("")

const searchFood=()=>{
 
setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
}

const submitFood=(event)=>{
event.preventDefault();
}


return(
<div className="mealCon">
<div className="heading">
    <h1>search</h1>
    <h4> accusamus aliquam. Repudiandae ab laborum laudantium dolore consequuntur, iste architecto quidem cupiditate.</h4>


<div className="d-flex" onSubmit={submitFood}>


<input type="text" onChange={(e)=>{(setSearch(e.target.value))}}
onKeyPress={searchFood} value={search}
/>
<button>
  <div className="ri-search-fill" ></div>
</button>

</div>

</div>






<Item clickAlpha={(alphaString)=>loopAlpha(alphaString)}/>

<div className="foodCon">
  




{
  foodData.map(x=>{
return(
<Food {...x} />
)
  })
}



</div>






</div>

)



}

export default Meal