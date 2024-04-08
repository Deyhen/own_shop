import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, UserState } from "./types";
import axios from "axios";
import { backendUrl } from "../api";
import { RootState } from "../store";

const initialUser: User = {
    firstname: "",
    lastname: "",
    password: "",
    id: "",
    email: "",
    tel: "",
    cart: [],
    isAdmin: false
  }
  const initialState: UserState = {
    data: initialUser
  }

  export const getUser = createAsyncThunk(
    'get user',
    async (onErrorRedirect?: () => void) => {
        try {
            const accesToken = localStorage.getItem('accessToken')
            
            if(!accesToken){
                console.log('user is not found');
                onErrorRedirect?.()
            }
            const res = await axios.get(`${backendUrl}/users/user`,
            {headers: {
                'Authorization': 'Bearer ' + accesToken
            }})
            return res
        } catch (error) {
            console.log(error);
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.data = action.payload?.data
        })
    }
})
export default userSlice.reducer;
export const selectUserState = (state: RootState) => state.user