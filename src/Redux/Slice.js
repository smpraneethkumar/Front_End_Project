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
            state.push(action.payload)

            console.log(action);
            state = state.filter((e)=> e.id !== action.payload)
            console.log(state);


            
            
            
            
        }
    }
 })

 export const {add,remove} = cartSlice.actions
 export default cartSlice.reducer