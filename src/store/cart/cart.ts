import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartState } from "./types";
import store, { RootState } from "../store";
import axios from "axios";
import { backendUrl } from "../api";
import { Item } from "../mainPage/types";

const initialState: CartState = {
    total: 0,
    goods: []
  }
  const checkToken = (onErrorRedirect?: () => void) => {
    const accessToken =  localStorage.getItem('accessToken')
            if(!accessToken){
                console.log('user is not found');
                onErrorRedirect?.()
            }
    return accessToken
  }

    export const getCart = createAsyncThunk(
        'get cart',
        async (onErrorRedirect?: () => void) => {
            try {
                const accessToken =  checkToken(onErrorRedirect)
                const res = await axios.get(`${backendUrl}/user/cart`, 
                    {headers: {
                        "Authorization": "Bearer " + accessToken}}
                )
                return res
            } catch (error) {
                console.log(error);
            }
        }
    )
    export const putInCart = createAsyncThunk(
        'put in cart',
        async ({onErrorRedirect, item}: {onErrorRedirect?: () => void, item: Item}) => {
            try {
                const accessToken =  checkToken(onErrorRedirect)
                const res = await axios.put(`${backendUrl}/user/cart`, item,
                    {headers: {
                            "Authorization": "Bearer " + accessToken
                        }
                    }
                )
                store.dispatch(getCart())
                return res
            } catch (error) {
               console.log(error);
            }
        }
    )
    export const deleteFromCart = createAsyncThunk(
        'delete from cart',
        async ({onErrorRedirect, item}: {onErrorRedirect?: () => void, item: Item}) => {
            try {
                const accessToken =  checkToken(onErrorRedirect)
                const res = await axios.delete(`${backendUrl}/user/cart`,
                {   data: item,
                    headers: {
                    "Authorization": "Bearer " + accessToken
                }
            }
                )
                store.dispatch(getCart())
                return res
            } catch (error) {
               console.log(error);
            }
        }
    )

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.goods = action.payload?.data.data
            state.total = action.payload?.data.total
        })
    }
})
export default cartSlice.reducer;
export const selectCartState = (state: RootState) => state.cart