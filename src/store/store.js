import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import counterSlice from './counterSlice';
import todoSlice from './todoSlice';


export const store = configureStore({
    reducer: {
        cart: cartSlice,
        counter: counterSlice,
        todo: todoSlice
    },
});