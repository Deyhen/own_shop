import { Item } from "../../goods/types";

export interface CartState {
    total: number,
    goods: CartItem[]
  }
  export interface CartItem {
    count: number,
    product: Item
  }
