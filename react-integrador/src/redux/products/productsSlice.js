import { createSlice } from "@reduxjs/toolkit"
import { TotalProducts, products } from "../../data/products"

const INITIAL_STATE = {
    products: products,
    totalProducts: TotalProducts,


}

 const productsSlicer = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: (state, action) => {
            return state
        },
    },
});

export const { getProducts } = productsSlicer.actions;

export default productsSlicer.reducer;

