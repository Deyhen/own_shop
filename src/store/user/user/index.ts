import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, UserState } from "./types";
import axios from "axios";
import { backendUrl } from "../../api";

const initialUser: User = {
    firstname: "",
    lastname: "",
    password: "",
    id: "",
    email: "",
    tel: "",
    isAdmin: false
  }
   const initialState: UserState = {
     data: initialUser
   }

  export const getUser = createAsyncThunk(
    'get user',
    async (onErrorRedirect?: () => void) => {
        try {
            const accessToken = localStorage.getItem('accessToken')
            
            if(!accessToken){
                console.log('user is not found');
                onErrorRedirect?.()
            }
            const res = await axios.get(`${backendUrl}/users/user`,
            {headers: {
                'Authorization': 'Bearer ' + accessToken
            }})
            return res
        } catch (error) {
            console.log(error);
        }
    }
)

export const userSlice = createSlice({
    name: 'user-data',
    initialState: initialState,
    reducers: {
        cleanUser: state => {
            state.data = initialUser;
            localStorage.removeItem('accessToken');
      }},
    extraReducers: builder => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.data = action.payload?.data
        })
    }
})
export const {
    cleanUser
  } = userSlice.actions;
export default userSlice.reducer;
