
import { Item } from "../mainPage/types"


export interface UsersState {
    data: User[]
}
export interface User{
    username: string,
    password: string,
    id: string,
    email: string,
    tel?: string,
    cart: Item[],
    isAdmin: boolean
}
