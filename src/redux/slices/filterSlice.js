import {createSlice} from "@reduxjs/toolkit";
const initialState ={
    categoryId:1,
    sortType:0
}
const filterSlice= createSlice({
    name:"filter",
    initialState,
    reducers:{
        setCategoryId(state,action){
            state.categoryId = action.payload;
        },
        setSortType(state,action){
            state.sortType = action.payload;

        }
    }
})
export const {setCategoryId,setSortType}=filterSlice.actions;
export default filterSlice.reducer;