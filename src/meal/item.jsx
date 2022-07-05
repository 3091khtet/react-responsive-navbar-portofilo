import React from 'react'

function Item({clickAlpha}) {


  const alphaString=[
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];
let number=0;



  return (
    <div className='itemCon'>
      
    {
      alphaString.map(x=>{
        return(
        <div>
<h3 key={number++} onClick={()=>clickAlpha(x)}>{x}</h3>
          </div>
        )
      })
    }


    </div>
  )
}

export default Item
