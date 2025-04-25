// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../component/Slice/authSlice';
import cartReducer from '../component/Slice/cartSlice';
import productReducer from '../component/Slice/productSlice';
const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        products: productReducer,
    },
});

export default store;