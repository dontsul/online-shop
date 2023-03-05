import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //

import sliderReducer from '../features/slices/sliderSlice';
import { goodsReducers } from '../features/slices/goodsSlice';
import { productReducers } from '../features/slices/productSlice';
import { cartReducer } from '../features/slices/cartSlice';
import { registrationReducer } from '../features/slices/registrationSlice';

const rootReducer = combineReducers({
    goods: goodsReducers,
    slider: sliderReducer,
    product: productReducers,
    cart: cartReducer,
    registration: registrationReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (serializableMiddleware) =>
        serializableMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
