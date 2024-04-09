import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {AuthState } from "./types";
import axios from "axios";
import { backendUrl } from "../api";
import store, { RootState } from "../store";
import { getUser } from "../user/user";
import { getCart } from "../cart/cart";

const initialState: AuthState = {
    accessToken: '',
}

export const login = createAsyncThunk(
    'login',
    async ({email, password}: {email: string, password: string}) => {
        try {
            const res = await axios.post(`${backendUrl}/users/login`, {email, password})
            localStorage.setItem('accessToken', res.data);
            store.dispatch(getUser())
            store.dispatch(getCart())
        } catch (error) {
            console.log(error);
        }
    }
)
export const signup = createAsyncThunk(
    'signup',
    async ({firstname, lastname, password, email, tel}: {firstname: string, lastname: string, password: string, email: string, tel: string | undefined}) => {
        try {
            if(tel === ""){
                tel = undefined
            }
            
            const res = axios.post(`${backendUrl}\/users/registration`, {firstname, lastname, email, password, tel})
            localStorage.setItem('accessToken', (await res).data);
            store.dispatch(getUser())
            store.dispatch(getCart())
            
        } catch (error) {
            console.log(error);
        }
    }
)
export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
})
export default authSlice.reducer;
export const selectAuthState = (state: RootState) => state.auth