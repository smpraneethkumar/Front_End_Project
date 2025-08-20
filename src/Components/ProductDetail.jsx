import React from 'react'
import { useParams } from 'react-router-dom'
import { discoutProducts } from './AllData';

function ProductDetail() {

  const {id} = useParams()
  console.log(id);
  console.log(discoutProducts) 

  const [productName] = discoutProducts.filter((ele)=>
     ele.id === id


)
  console.log(productName);
  
  return (
    <div>
      <h1>ProductDetail</h1>
      <h2>{productName.productName      }</h2>
      
        {/* <h1>{file.id}</h1> */}
      

{/* {
     discoutProducts.id && file.map((e, i)=>{
    <h1 key={i}>{e.price}</h1>

  })
} */}





{/* /* if (`{id} === {discoutProducts}`) {
  
  <h1>{id}</h1> */}
  


       {/* {
        discoutProducts.id && id.map((id)=>{

          <h1>{id}</h1>
          // <h1>{idd.productName}</h1>
          // <img src={d.imgUrl} alt="" />
        })
      } */}
      <h2>fgfg</h2>
    </div>
  )
}

export default ProductDetail