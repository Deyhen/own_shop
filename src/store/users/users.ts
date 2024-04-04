import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UsersState } from "./types";
import axios from "axios";
import { backendUrl } from "../api";
import { RootState } from "../store";

const initialState: UsersState = {
    data: []
}

export const getUsers = createAsyncThunk(
    'get users',
    async () => {
        try {
            const res = await axios.get(`${backendUrl}/users`)
            return res
        } catch (error) {
            console.log(error);
        }
    }
)

export const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.data = action.payload?.data
        })
       
    }
})
export default usersSlice.reducer;
export const selectUsersState = (state: RootState) => state.users