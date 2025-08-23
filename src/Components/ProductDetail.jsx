import React from 'react'
import { useParams } from 'react-router-dom'
import { discoutProducts } from './AllData';
import table from "../assets/table.jpg"
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function ProductDetail() {

  const { id } = useParams()
  // console.log(id);
  // console.log(discoutProducts) 

  const [productName] = discoutProducts.filter((ele) =>
    ele.id === id


  )
  let [{ rating }] = productName.reviews
  // console.log(rating);

  // console.log(productName.reviews);

  // console.log("rrfrkropfker"+productName.reviews.rating);

  // function desc (){
  //    return  `<p>sdfdsfdsfsdsdfsdfsfs</p>`
  // }

  return (
    <div>
      <h1>ProductDetail</h1>
      <div >

      <img src={table} alt="" style={{height:"250px",width:"100%"}} />
      {/* <h4  style={{color:"white"}}>{productName.productName}</h4> */}
      <div className="container">
        <div className="row">
          <div className='col-6' >
            <img src={productName.imgUrl} alt="" style={{width:"100%",height:"80%"}} />
          </div>
          <div className='col-6'>
            <h2>{productName.productName}</h2>
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
            <input type="number" style={{width:"80px"}} id=""placeholder='1'  className='mt-3'/> <br/> 
            <Link to={`/pDetail/${productName.id}`}><button className='btn btn-outline- btn-success mt-5'>Add to Cart</button></Link>

          </div>
        </div>

       <p>description</p>
        <p>Review</p>
      
        </div>
      </div>

     
    </div>
  )
}

export default ProductDetail