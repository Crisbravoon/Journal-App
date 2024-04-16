
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

        login: (state, { payload }) => {
            state.status = payload.status;
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.erroMessage = null;
        },

        logOut: (state, payload) => {
            state.status = 'not-authenticated',
            state.uid = null,
            state.email = null,
            state.displayName = null,
            state.photoURL = null,
            state.erroMessage = payload.erroMessage;
        },

        //Verifica si esta autenticado o no
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
});

export const { login, logOut, checkingCredentials } = authSlice.actions;