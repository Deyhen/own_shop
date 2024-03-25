import axios from "axios";
import { Item } from "./types"
import { backendUrl } from "../api";

 export const Goods: Item[] = [
    {name: 'Cat Food', id: "1", price: 10},
    {name: 'Dog Food', id: "2", price: 15},
    {name: 'Parrot Food', id: "3", price: 7},
]

export const getGoods = async () => {
      try {
        const res = await axios.get<Item[]>(
          `${backendUrl}/products/2`
        );
  
        return res.data;
      } catch (e) {
        console.log(e);
      }
    };