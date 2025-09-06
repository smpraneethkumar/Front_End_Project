import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './AllData';
import table from "../assets/table.jpg"
import { FaStar } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { add } from '../Redux/Slice';


function ProductDetail() {
  const dispatch = useDispatch()

  const [added, setAdded] = useState(false)

  const { id } = useParams()

  const [singlePro] = products.filter((ele) =>
    ele.id === id


  )
  let [{ rating, text }] = singlePro.reviews


  const handleAdd = (singlePro) => {
    setAdded(true)
    dispatch(add(singlePro))


  }
  return (
    <div>
      {/* THE SINGLE PRODUCT DETAILS  */}
      <div >

        <img src={table} alt="" style={{ height: "250px", width: "100%" }} />

        <div className="container">
          <div className="row">
            <div className='col-6' >
              <img src={singlePro.imgUrl} alt="" style={{ width: "100%", height: "80%" }} />
            </div>
            <div className='col-6'>
              <h2>{singlePro.singlePro}</h2>
              <span className='d-flex gap-4'>

                <p className="card-text"><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /></p>

                <h5>{rating} rating</h5>
              </span><br />
              <span className='d-flex gap-5'>

                <h4>${singlePro.price}</h4>
                <h5>category:{singlePro.category}</h5>
              </span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odit labore a fugiat voluptatibus nemo minus dolorum rerum quasi, </p>
              <input type="number" style={{ width: "80px" }} id="" placeholder='1' className='mt-3' /> <br />
              <button className='btn btn-outline- btn-success mt-5' onClick={() => { handleAdd(singlePro) }} >{added ? "Added" : "Add to cart"}</button>

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