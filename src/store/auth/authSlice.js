

import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        erroMessage: null,
    },
    reducers: {

        login: (state, action) => {
            state.status = action.payload.status;
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.photoURL = action.payload.photoURL;
        },

        logOut: (state, payload) => {

        },

        //Verifica si esta autenticado o no
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
});

export const { login, logOut, checkingCredentials } = authSlice.actions;