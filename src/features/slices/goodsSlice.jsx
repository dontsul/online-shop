import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../../config';

export const fetchData = createAsyncThunk('fetchData', async function () {
    try {
        const respons = await fetch(API_URL);
        const data = await respons.json();

        return data;
    } catch (error) {
        console.log(error);
    }
});

const goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        goods: [],
        filteredGoods: [],
        categories: [],
        status: null,
        error: null,
        selected: 'default',
    },
    reducers: {
        filterCategory(state, action) {
            state.filteredGoods =
                action.payload === 'all'
                    ? state.goods
                    : state.goods.filter((prod) => prod.category === action.payload);
        },
        selectedValue(state, action) {
            state.selected = action.payload;
        },

        filterSelected(state, action) {
            switch (action.payload) {
                case 'lowToHigh':
                    state.filteredGoods = state.filteredGoods.sort((a, b) =>
                        a.price > b.price ? 1 : -1
                    );
                    break;
                case 'highToLow':
                    state.filteredGoods = state.filteredGoods.sort((a, b) =>
                        a.price < b.price ? 1 : -1
                    );
                    break;
                case 'customerReview':
                    state.filteredGoods = state.filteredGoods.sort((a, b) =>
                        a.rating.rate < b.rating.rate ? 1 : -1
                    );
                    break;
                // case 'default':
                //     state.filteredGoods = state.filteredGoods;

                default:
                    state.filteredGoods = state.filteredGoods;
                    break;
            }
        },
    },
    extraReducers: {
        [fetchData.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchData.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.goods = action.payload;
            state.filteredGoods = action.payload;
            state.categories = [
                'all',
                ...Array.from(new Set(action.payload.map((el) => el.category))),
            ];
        },
        [fetchData.rejected]: (state, action) => {},
    },
});

export const goodsReducers = goodsSlice.reducer;
export const { filterCategory, filterSelected, selectedValue } = goodsSlice.actions;
