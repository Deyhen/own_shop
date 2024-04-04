import { Item } from "../mainPage/types"

export interface UserState{
    data: User
}
export interface User {
    username: string,
    password: string,
    id: string,
    email: string,
    tel?: string,
    cart: Item[],
    isAdmin: boolean
}