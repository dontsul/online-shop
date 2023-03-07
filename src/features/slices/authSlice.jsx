import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        email: null,
        userName: null,
        userID: null,
        status: 'idle',
    },
    reducers: {
        SET_ACTIVE_USER(state, action) {
            state.isLoggedIn = true;
            state.email = action.payload.email;
            state.userName = action.payload.userName;
            state.userID = action.payload.userID;
        },
        REMOVE_ACTIVE_USER(state, action) {
            state.isLoggedIn = false;
            state.email = null;
            state.userName = null;
            state.userID = null;
        },
    },
});

export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUserName = (state) => state.auth.userName;
export const selectUserID = (state) => state.auth.userID;

export const authReducer = authSlice.reducer;
