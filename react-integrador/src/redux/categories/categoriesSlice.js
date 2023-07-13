import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/Categories";

const INITIAL_STATE = {
    categories: categories,
    selectedCategory: null,
}

 
export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: INITIAL_STATE,
    reducers: {
        getCategories: state => {
            return state; 
        },
        selectedCategory: (state, action) => {
            return{
                ...state,
                selectedCategory: 
                action.payload!== state.selectedCategory ?
                action.payload : null,


            }

        }
    }, 
});

export const { getCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
