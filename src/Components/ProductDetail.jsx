import React from 'react'
import { useParams } from 'react-router-dom'
import { discoutProducts } from './AllData';
import { FaStar } from "react-icons/fa6";
function ProductDetail() {

  const {id} = useParams()
  // console.log(id);
  // console.log(discoutProducts) 

  const [productName] = discoutProducts.filter((ele)=>
     ele.id === id


)
let [{rating ,text}] = productName.reviews
console.log(rating);

// console.log(productName.reviews);

  // console.log("rrfrkropfker"+productName.reviews.rating);

  
  return (
    <div>
      <h1>ProductDetail</h1>
      <div className="container">
        <div className="row">
          <div className='col-6'>
              <img src={productName.imgUrl} alt="" />
          </div>
          <div className='col-6'>
            <h2>{productName.productName   }</h2>
            <span className='d-flex gap-4'>

             <p className="card-text"><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /></p>
             {/* <h5>{productName.}</h5>/ */}
             <h5>{rating} rating</h5>
            </span><br />
            <span className='d-flex gap-5'>

            <h4>${productName.price}</h4>
            <h5>category:{productName.category}</h5>
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odit labore a fugiat voluptatibus nemo minus dolorum rerum quasi, </p>
             <button className='btn btn-outline- btn-success'>Add to Cart</button>

          </div>
        </div>
      </div>
     
    </div>
  )
}

export default ProductDetail