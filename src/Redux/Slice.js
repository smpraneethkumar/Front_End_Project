import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

 const  cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers :{
        add(state, action){
            console.log(action);
            
        },
        remove(state, action){
            console.log(action);
            
        }
    }
 })

 export const {add,remove} = cartSlice.actions
 export default cartSlice.reducer