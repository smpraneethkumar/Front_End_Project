// import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { ImBin } from "react-icons/im";
import { remove,increment,decrement } from '../Redux/Slice';
import { useState } from 'react';
// import { discoutProducts } from './AllData';


const Cart = () => {
  // console.log(increment);
  // console.log(decrement);
  
  

  // const [count , setCount] = useState(0)

  // const incrementHandler =()=>{

  //   setCount(count + 1)
  // }
  // const decrementHandler =()=>{
  //   setCount(count -1)
  // }
  const dispatch = useDispatch()

  const cartData = useSelector(state=> state.cart)

  
 
  

  
  const handleRemove =(id)=>{
    dispatch(remove(id))
    
    
  }

  // const removeProduct = cartData.at(1)
  // console.log(removeProduct);

  // let re = cartData.filter((e)=> e.id !== removeProduct.id)
  // console.log(re);
  

  // const {id} = useParams()
  // console.log(id);

  // const [cartProduct] = discoutProducts.filter((ele)=>
  // ele.id=== id
  //   )
  //   console.log(cartProduct);

  
    
    // console.log(cartData);
    // console.log(cartData.qq);
     const totalPrice = cartData.reduce((initialVal, currentObj)=>{
    return initialVal + currentObj.price * currentObj.quantity
  }, 0)
  console.log(totalPrice);
  
    

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-9 ">
         {
          cartData && cartData.map((cart)=>(
           
         
             <div className='d-flex gap-5' key={cart.id}>
               <img style={{width:"20%",height:"40%"}} src={cart.imgUrl} alt="" />
               <h5>{cart.productName}</h5>
               <p>${cart.price} * {cart.quantity} ${cart.price * cart.quantity}</p>
               {/* <p>{cart.quantity+cart.price}</p> */}

              
                <div>
                
               <button type="button" className="btn btn-outline-danger btn-sm me-5"  onClick={()=>{handleRemove(cart.id)}}><ImBin/> </button> 

                <button type="button" className="btn btn-outline-primary btn-sm me-5" onClick={()=> dispatch(increment(cart.id))}><FaPlus /></button>
               <button type="button" className="btn btn-outline-primary btn-sm " onClick={()=> dispatch(decrement(cart.id))}><FaMinus/></button> 

                </div>
              
             
                   </div>

             
          ))  
        
        }

        </div>
        <div className="col-md-3">
    
                 <h4 className='display-6'>Cart Summary</h4>
                 <hr />
                 {
                  

                 <b>Total Price: {totalPrice}</b>
                 }    
               </div>
       
      </div>
        <h2>Cart</h2>



       
        {/* <div className="container">
          <div className="row">
            <div className="col-md-4">
          <h3>sdfsfsdfs</h3>
            </div>
            <div className="col-md-3">
              <h2>sflkdfsldkfjsdklfjds</h2>
            </div>
          </div>
         </div>     
        */}
        
          {/* // cartProduct 
          // cartProduct < 0 ? 
          
            
        // <div className="container">
        //   <div className="row gap-5">
        //     <div className='col-7 '>
        //       <img style={{width:"30%",height:"50%"}} src={cartProduct.imgUrl} alt="" />
        //       </div>
        //       <div className="col-4">
        //         <h4 className='display-6'>Cart Summary</h4>
        //         <hr />
        //         <b>Total Price:353</b>
        //       </div>
        //       </div>
        //       </div>
              //  : <h2> your cart is empty</h2> */}

    </div>
  )
}

export default Cart