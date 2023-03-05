import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from '../features/slices/sliderSlice';
import { goodsReducers } from '../features/slices/goodsSlice';
import { productReducers } from '../features/slices/productSlice';
import { cartReducer } from '../features/slices/cartSlice';

export const store = configureStore({
    reducer: {
        goods: goodsReducers,
        slider: sliderReducer,
        product: productReducers,
        cart: cartReducer,
    },
    devTools: true,
});
