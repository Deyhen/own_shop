


export interface UserState{
    data: User
}
export interface User {
    firstname: string,
    lastname: string,
    password: string,
    id: string,
    email: string,
    tel?: string,
    isAdmin: boolean,

}