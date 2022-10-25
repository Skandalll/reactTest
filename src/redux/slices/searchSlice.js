import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    value:"",
}
const searchSlice = createSlice({
 name:"search",
 initialState,
 reducers:{
     setInputValue(state,action){
               state.value = `${action.payload}`
           },

     clearInputValue(state){
         state.value = ""
     }
 }
})
export const {setInputValue,clearInputValue}=searchSlice.actions
export default searchSlice.reducer