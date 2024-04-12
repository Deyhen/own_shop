
import { Item } from "../../store/goods/types"
import { CartItem } from "../../store/user/cart/types"

export interface ProductCartProps  {
    item: CartItem,
    props?: any,
    index: number
}
export interface ProductProps {
    item: Item,
    props?: any
}