import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cartGoods',
    initialState: {
        cart: [],
        quantityGoods: 0,
        money: 0,
    },
    reducers: {
        addToCart(state, action) {
            const index = state.cart.findIndex((i) => i.id === action.payload.id);
            if (index === -1) {
                const result = { ...action.payload, quantity: 1 };
                state.cart.push(result);
            } else {
                state.cart[index].quantity += 1;
            }
        },
        removeFromCart(state, action) {
            state.cart = state.cart.filter((product) => +product.id !== +action.payload);
            state.quantityGoods = state.cart.reduce((acc, p) => {
                return acc + p.quantity;
            }, 0);
        },
        chanceTotalQuantity(state, action) {
            // state.quantityGoods += 1;
            state.quantityGoods = state.cart.reduce((acc, p) => {
                return acc + p.quantity;
            }, 0);
        },
        changeQuantity(state, action) {
            const index = state.cart.findIndex((prod) => prod.id === action.payload.id);
            state.cart[index].quantity += action.payload.value;
            if (state.cart[index].quantity === 0) {
                state.cart = state.cart.filter((product) => +product.id !== +state.cart[index].id);
            }
            state.quantityGoods = state.cart.reduce((acc, p) => {
                return acc + p.quantity;
            }, 0);
        },
        addToMoney(state, action) {
            state.money = state.cart.reduce((acc, p) => {
                return acc + p.quantity * p.price;
            }, 0);
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, chanceTotalQuantity, addToMoney, removeFromCart, changeQuantity } =
    cartSlice.actions;
