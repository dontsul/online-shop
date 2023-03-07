import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import firebase from 'firebase/compat/app';
export const subscribeToCartChanges = (userId, store) => {
    const cartRef = firebase.database().ref(`carts/${userId}`);
    store.subscribe(() => {
        const { items, quantityGoods, money } = store.getState().cart;
        cartRef.set({ items, quantityGoods, money });
    });
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        quantityGoods: 0,
        money: 0,
        // status: 'idle',
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
} = cartSlice.actions;

//---------------------------------------------------
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { getDatabase, ref, onValue } from 'firebase/database';

// export const fetchCart = createAsyncThunk('cartGoods/fetchCart', async (_, { getState }) => {
//     // Получаем ID текущего пользователя из состояния
//     const userId = getState().auth.userID;
//     console.log(userId);
//     // Получаем ссылку на корзину пользователя в Firebase
//     const cartRef = db.ref(`carts/${userId}`);
//     console.log(cartRef);
//     // Загружаем данные корзины из Firebase и возвращаем их
//     const snapshot = await cartRef.once('value');
//     return snapshot.val();
// });

// const cartSlice = createSlice({
//     name: 'cartGoods',
//     initialState: {
//         cart: [],
//         quantityGoods: 0,
//         money: 0,
//         status: 'idle',
//     },
//     reducers: {
//         addToCart(state, action) {
//             const index = state.cart.findIndex((i) => i.id === action.payload.id);
//             if (index === -1) {
//                 const result = { ...action.payload, quantity: 1 };
//                 state.cart.push(result);
//             } else {
//                 state.cart[index].quantity += 1;
//             }
//         },
//         removeFromCart(state, action) {
//             state.cart = state.cart.filter((product) => +product.id !== +action.payload);
//             state.quantityGoods = state.cart.reduce((acc, p) => {
//                 return acc + p.quantity;
//             }, 0);
//         },
//         chanceTotalQuantity(state, action) {
//             // state.quantityGoods += 1;
//             state.quantityGoods = state.cart.reduce((acc, p) => {
//                 return acc + p.quantity;
//             }, 0);
//         },
//         changeQuantity(state, action) {
//             const index = state.cart.findIndex((prod) => prod.id === action.payload.id);
//             state.cart[index].quantity += action.payload.value;
//             if (state.cart[index].quantity === 0) {
//                 state.cart = state.cart.filter((product) => +product.id !== +state.cart[index].id);
//             }
//             state.quantityGoods = state.cart.reduce((acc, p) => {
//                 return acc + p.quantity;
//             }, 0);
//         },
//         addToMoney(state, action) {
//             state.money = state.cart.reduce((acc, p) => {
//                 return acc + p.quantity * p.price;
//             }, 0);
//         },
//     },
//     extraReducers: {
//         // Обрабатываем успешное завершение загрузки корзины из Firebase
//         [fetchCart.fulfilled]: (state, action) => {
//             state.cart = action.payload || [];
//             state.status = 'succeeded';
//             console.log(state.status);
//         },
//         // Обрабатываем начало загрузки корзины из Firebase
//         [fetchCart.pending]: (state) => {
//             state.status = 'loading';
//         },
//         // Обрабатываем ошибку загрузки корзины из Firebase
//         [fetchCart.rejected]: (state, action) => {
//             state.status = 'failed';
//             state.error = action.error.message;
//         },
//     },
// });

// export const cartReducer = cartSlice.reducer;
// export const { addToCart, chanceTotalQuantity, addToMoney, removeFromCart, changeQuantity } =
//     cartSlice.actions;
