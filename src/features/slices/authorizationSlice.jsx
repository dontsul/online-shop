import { createSlice } from '@reduxjs/toolkit';

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState: {
        form: {
            userEmail: '',
            userPassword: '',
        },

        isLoading: false,
    },
    reducers: {
        changeUserLoginEmail(state, action) {
            state.form.userEmail = action.payload;
        },
        changeUserLoginPassword(state, action) {
            state.form.userPassword = action.payload;
        },

        changeStatusLoginLoading(state, action) {
            state.isLoading = action.payload;
        },
    },
});

export const authorizationReducer = authorizationSlice.reducer;
export const { changeUserLoginEmail, changeUserLoginPassword, changeStatusLoginLoading } =
    authorizationSlice.actions;
