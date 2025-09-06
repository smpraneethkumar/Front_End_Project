import { useDispatch, useSelector } from 'react-redux';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { ImBin } from "react-icons/im";
import { remove,increment,decrement } from '../Redux/Slice';



const Cart = () => {
 
  const dispatch = useDispatch()

  const cartData = useSelector(state=> state.cart)
  
  const handleRemove =(id)=>{
    dispatch(remove(id))
     }

   const totalPrice = cartData.reduce((initialVal, currentObj)=>{
    return initialVal + currentObj.price * currentObj.quantity
  }, 0)
  console.log(totalPrice);
  
  return (
    // THE PRODUCTS WHICH IS ADDED IN CART PAGE 
    <div className='container'>
      <div className="row ">
        <div className="col-md-9 ">
         {
          cartData && cartData.map((cart)=>(
             <div className='d-flex gap-5' key={cart.id}>
               <img style={{width:"20%",height:"40%"}} src={cart.imgUrl} alt="" />
               <h5>{cart.productName}</h5>
               <p>${cart.price} * {cart.quantity} ${cart.price * cart.quantity}</p>

                <div> 
               <button type="button" className="btn btn-outline-danger btn-sm me-5"  onClick={()=>{handleRemove(cart.id)}}><ImBin/> </button> 
                <button type="button" className="btn btn-outline-primary btn-sm me-5" onClick={()=> dispatch(increment(cart.id))}><FaPlus /></button>
               <button type="button" className="btn btn-outline-primary btn-sm " onClick={()=> dispatch(decrement(cart.id))}><FaMinus/></button> 
                </div>
                   </div>
          ))   
}
        </div>
        {/* PRODUCTS TOTAL PRICES  */}
        <div className="col-md-3">
    
                 <h4 className='display-6'>Cart Summary</h4>
                 <hr />
                 {
                 <b>Total Price: {totalPrice}</b>
                 }    
               </div>
       
      </div>
       



      

    </div>
  )
}

export default Cart