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
            console.log(action);
            
        }
    }
 })

 export const {add,remove} = cartSlice.actions
 export default cartSlice.reducer