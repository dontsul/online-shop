import { createSlice } from '@reduxjs/toolkit';
import { sliderData } from '../../assets/data/data';

export const sliderSlice = createSlice({
    name: 'slider',
    initialState: {
        numberSlide: 0,
        length: sliderData.length,
    },
    reducers: {
        nextSlide: (state, action) => {
            state.numberSlide = action.payload > state.length - 1 ? 0 : action.payload;
        },
        prevSlide: (state, action) => {
            state.numberSlide = action.payload < 0 ? state.length - 1 : action.payload;
        },
        dotSlide: (state, action) => {
            const slide = action.payload;
            state.numberSlide = slide;
        },
    },
});

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
