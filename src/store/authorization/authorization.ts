import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {UsersState } from "./types";
import axios from "axios";
import { backendUrl } from "../api";
import { RootState } from "../store";

const initialState: UsersState = {
  data: []
}

export const login = createAsyncThunk(
    'login',
    async ({email, password}: {email: string, password: string}) => {
        try {
            const res = await axios.post(`${backendUrl}/users/login`, {email, password})
            console.log(res.data);
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
            console.log((await res).data);
        } catch (error) {
            console.log(error);
        }
    }
)
export const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},
})
export default usersSlice.reducer;
export const selectUsersState = (state: RootState) => state.users