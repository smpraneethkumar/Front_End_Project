// import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { discoutProducts } from './AllData';
// import { discoutProducts } from './AllData';

const Cart = () => {

  const {id} = useParams()
  console.log(id);

  const [cartProduct] = discoutProducts.filter((ele)=>
  ele.id=== id
    )
    console.log(cartProduct);
    
    

  return (
    <div>
        <h2>Cart</h2>

        {
          // cartProduct 
          cartProduct == 0 ? 
        <div className="container">
          <div className="row">
            <div className='col-6'>
              <img src={cartProduct.imgUrl} alt="" />
              </div>
              </div>
              </div>
        : <h2> your cart is empty</h2>
        }


    </div>
  )
}

export default Cart