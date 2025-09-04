import { createSlice } from "@reduxjs/toolkit";



 const  cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers :{
        add(state, action){
            // state.push(action.payload)
        
            const existing = state.find(item=> item.id === action.payload.id)
            if(existing){
                existing.quantity+=1
            }else{
                state.push({...action.payload, quantity:1})
            }

            console.log(action);
            console.log(state);
            
            
        },
        remove(state, action){
            // state.push(action.payload)

            // console.log(action);
            // console.log("this is state"+state);
            return state.filter((products)=>products.id !== action.payload)  
        },
        increment(state,action){
            const item = state.find(i => i.id === action.payload)

            if(item){
                item.quantity+=1
            }
        },
        decrement(state,action){
            const item = state.find(i => i.id === action.payload)
            if(item && item.quantity > 1){
                item.quantity-=1;
            }
        }
    }
 })

 export const {add,remove,increment,decrement} = cartSlice.actions
 export default cartSlice.reducer