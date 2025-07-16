import { configureStore } from "@reduxjs/toolkit";
import  ProductsSlice  from "./slices/ProductsSlice";

export const Store = configureStore({
    reducer:{
        Products:ProductsSlice
    }
})