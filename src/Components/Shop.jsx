import React, { useState } from 'react'
import { products } from './AllData';
import { FaStar } from 'react-icons/fa';



const Shop = () => {
 
  return (
    <div>
      <div className='d-flex justify-content-between  m-3'>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Filter By Category
  </button>
  <ul class="dropdown-menu">y
    <li><a class="dropdown-item" href="#">sofa</a></li>
    <li><a class="dropdown-item" href="#">chair</a></li>
    <li><a class="dropdown-item" href="#">watch</a></li>
    <li><a class="dropdown-item" href="#">mobile</a></li>
    <li><a class="dropdown-item" href="#">wireless</a></li>
  </ul>
</div>
        <div className="col-sm-5">
    <input type="text" className="form-control" placeholder="Search" aria-label="City"/>
  </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {
            products && products.map((allPro) => (
              <div className="col" key={allPro.id}>
                <div className="card">
                  <img src={allPro.imgUrl} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{allPro.productName}</h5>
                    <p className="card-text"><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /></p>
                    <h2 className="card-text">{allPro.price}</h2>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Shop