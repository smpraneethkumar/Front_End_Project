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

  0
    
    

  return (
    <div>
        <h2>Cart</h2>

        {
          // cartProduct 
          cartProduct > 0 ? 
            <h2> your cart is empty</h2> :
            
        <div className="container">
          <div className="row gap-5">
            <div className='col-7 '>
              <img style={{width:"30%",height:"50%"}} src={cartProduct.imgUrl} alt="" />
              </div>
              <div className="col-4">
                <h4 className='display-6'>Cart Summary</h4>
                <hr />
                <b>Total Price:353</b>
              </div>
              </div>
              </div>
       
        }


    </div>
  )
}

export default Cart