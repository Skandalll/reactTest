import {createSlice} from "@reduxjs/toolkit";

const initialState={
    items:[],
    totalPrice:0,
    totalPizzasCount:0,
}
const cartSlice=createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        onClickPlus(state,action){
            const findItem = state.items.find((obj)=>obj.id === action.payload)
            findItem.count++
        },
        onClickMinus(state,action){
            const findItem = state.items.find((obj)=>obj.id === action.payload)
            if(findItem.count-1!==0){
                findItem.count--
            }
        },
        addToCart(state,action){
            const findItem = state.items.find((obj)=>obj.id === action.payload.id)

            if(findItem){
                findItem.count++;
            }else{
                state.items.push({...action.payload,count:1})
            }
            state.totalPizzasCount++;
            state.totalPrice = state.items.reduce((sum,obj)=>{
               return (obj.price*obj.count) + sum
            },0)
        },
        deleteFromCart(state,action){
            state.items.filter((item)=>item.id!==action.payload)
        }
    }
})
export const {addToCart,deleteFromCart,onClickMinus,onClickPlus} = cartSlice.actions
export default cartSlice.reducer