import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        quantityGoods: 0,
        money: 0,
    },
    reducers: {
        addItem: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },

        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },

        clearCart: (state) => {
            state.items = [];
        },
        setCart: (state, action) => {
            state.items = action.payload;
        },
        changeQuantity(state, action) {
            const index = state.items.findIndex((prod) => prod.id === action.payload.id);
            state.items[index].quantity += action.payload.value;
            if (state.items[index].quantity === 0) {
                state.items = state.items.filter(
                    (product) => +product.id !== +state.items[index].id
                );
            }
            state.quantityGoods = state.items.reduce((acc, p) => {
                return acc + p.quantity;
            }, 0);
        },
        chanceTotalQuantity(state, action) {
            state.quantityGoods = state.items.reduce((acc, p) => {
                return acc + p.quantity;
            }, 0);
        },
        countingTotalMoney(state, action) {
            state.money = state.items.reduce((acc, p) => {
                return acc + p.quantity * p.price;
            }, 0);
        },
        setUid(state, action) {
            state.uid = action.payload;
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const {
    addItem,
    removeItem,
    clearCart,
    setCart,
    changeQuantity,
    chanceTotalQuantity,
    countingTotalMoney,
    setUid,
} = cartSlice.actions;
