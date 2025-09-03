import { createSlice } from "@reduxjs/toolkit";



 const  cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers :{
        add(state, action){
            state.push(action.payload)
        
            console.log(action);
            console.log(state);
            
            
        },
        remove(state, action){
            // state.push(action.payload)

            // console.log(action);
            console.log("this is state"+state);
            return state.filter((products)=>products.id !== action.payload)  
        },
        increment(state,action) {
            const item = state.find(i => i.id === action.payload)

            if(item){
                item.quantity++
            }
        },
        decrement(state,action){
            const item = state.find(i => i.id === action.payload)
            if(item && item.quantity > 1){
                item.quantity--;
            }
        }
    }
 })

 export const {add,remove} = cartSlice.actions
 export default cartSlice.reducer