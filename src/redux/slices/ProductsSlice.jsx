import { createSlice } from "@reduxjs/toolkit";
import { FetchProducts } from "../../api/FetchProducts";

const initialState = {
    error: null,
    loading: false,
    products: [],
    category: [],
    dummyProducts: []
}
export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterCategories: (state, action) => {
            if (action.payload == "All Categories") {
                state.products = state.dummyProducts;
            } else {
                state.products = state.dummyProducts.filter((prod) => prod.category === action.payload);
            }
        },
        filterPrice: (state, action) => {
            if (action.payload == "Low") {
                state.products = state.products.sort((a, b) => a.price - b.price);
            }
            if (action.payload == "High") {
                state.products = state.products.sort((a, b) => b.price - a.price);
            } if (action.payload == "Default") {
                state.products = state.products;
            }
        },
        searchQuery: (state, action) => {
            console.log(action.payload)
            state.products = state.dummyProducts.filter((prod) => prod.title.toString().toLowerCase().includes(action.payload.toString()))
        }
    }, extraReducers: (builder) => {
        builder.addCase(FetchProducts.pending, (state, action) => {
            state.loading = true;
        })
            .addCase(FetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.dummyProducts = action.payload;
                state.loading = false;

                // // Separating only Category
                const set = new Set();
                for (let items of state.products) {
                    if (!set.has(items.category)) {
                        set.add(items.category)
                        state.category.push(items.category)
                    }
                }

            })
            .addCase(FetchProducts.rejected, (state, action) => {
                state.error = action.payload
            })
    }
})

export default ProductsSlice.reducer;
export const { filterCategories, filterPrice, searchQuery } = ProductsSlice.actions;

export const AllProducts = (state) => state.Products.products
export const loadingState = (state) => state.Products.loading
export const category = (state) => state.Products.category;