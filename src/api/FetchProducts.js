import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchProducts = createAsyncThunk('Fetch/products', async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        return products
    } catch (err) {
        return err
    }
})