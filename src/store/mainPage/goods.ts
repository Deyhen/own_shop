import axios from "axios";
import { GoodsState, Item } from "./types"
import { backendUrl } from "../api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  { RootState } from "../store";


 export const Goods: Item[] = [
    {name: 'Cat Food', id: "1", price: 1},
    {name: 'Dog Food', id: "2", price: 1},
    {name: 'Parrot Food', id: "3", price: 1},
]

const initialState: GoodsState = {
  data: []
}

export const getGoods = createAsyncThunk(
    'get goods', 
    async () => {
      try {
        const res = await axios.get<Item[]>(
          `${backendUrl}/products/`
        );
        return res.data;
      } catch (e) {
        console.log(e);
      }
    });
  
  export const goodsSlice = createSlice({
    name: "goods",
    initialState: initialState,
    reducers: {},
     extraReducers: builder =>
     builder.addCase(getGoods.fulfilled, (state, action) => {
      state.data = action.payload || Goods;
     })
  })
  export default goodsSlice.reducer;
  export const selectGoodsState = (state: RootState) => state.goods;