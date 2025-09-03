// import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { ImBin } from "react-icons/im";
import { remove } from '../Redux/Slice';
// import { discoutProducts } from './AllData';


const Cart = () => {
  const dispatch = useDispatch()

  const [cartData] = useSelector(state=> state.cart)

  // console.log(cartData);
  console.log(cartData);
  // console.log("supers"+o);
  

  
  const handleRemove =(id)=>{
    dispatch(remove(id))
    
    
  }

  // const {id} = useParams()
  // console.log(id);

  // const [cartProduct] = discoutProducts.filter((ele)=>
  // ele.id=== id
  //   )
  //   console.log(cartProduct);

  
    
    

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-9 ">
         {
          cartData && cartData.map((cart)=>(
           
         
             <div className='d-flex gap-5' key={cart.id}>
               <img style={{width:"20%",height:"40%"}} src={cart.imgUrl} alt="" />
               <h5>{cart.productName}</h5>
               <p>${cart.price} * 3 ${cart.price}</p>

               
                <div>
                
               <button type="button" className="btn btn-outline-danger btn-sm me-5"  onClick={()=>{handleRemove(cart.id)}}><ImBin/> </button> 

                <button type="button" className="btn btn-outline-primary btn-sm me-5"><FaPlus /></button>
               <button type="button" className="btn btn-outline-primary btn-sm "><FaMinus/></button> 

                </div>
                   </div>
              
             

             
          ))  
        }

        </div>
        <div className="col-md-3">
    
                 <h4 className='display-6'>Cart Summary</h4>
                 <hr />
                 <b>Total Price:353</b>
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