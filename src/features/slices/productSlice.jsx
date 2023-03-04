import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../config';

export const fetchProduct = createAsyncThunk('fetchProduct', async function (id) {
    try {
        const respons = await fetch(`${API_URL}${String(id)}`);
        const data = await respons.json();

        return data;
    } catch (error) {
        console.log(error);
    }
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: {},
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchProduct.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchProduct.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.product = action.payload;
        },
        [fetchProduct.rejected]: (state, action) => {
            state.status = 'rejected';
        },
    },
});

export const productReducers = productSlice.reducer;
