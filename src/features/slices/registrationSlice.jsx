import { createSlice } from '@reduxjs/toolkit';

const registrationSlice = createSlice({
    name: 'registration',
    initialState: {
        form: {
            // userName: '',
            // userSurname: '',
            userEmail: '',
            userPassword: '',
            userCPassword: '',
        },

        isLoading: false,
    },
    reducers: {
        // changeUserName(state, action) {
        //     state.userName = action.payload;
        // },
        // changeUserSurname(state, action) {
        //     state.userSurname = action.payload;
        // },
        changeUserEmail(state, action) {
            state.form.userEmail = action.payload;
        },
        changeUserPassword(state, action) {
            state.form.userPassword = action.payload;
        },
        changeUserCPassword(state, action) {
            state.form.userCPassword = action.payload;
        },
        changeStatusLoading(state, action) {
            state.isLoading = action.payload;
        },
    },
});

export const registrationReducer = registrationSlice.reducer;
export const {
    changeUserName,
    changeUserSurname,
    changeUserEmail,
    changeUserPassword,
    changeUserCPassword,
    changeStatusLoading,
} = registrationSlice.actions;
