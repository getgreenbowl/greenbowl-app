import BaseApi from "../base";
import {PartialUser, R_User as rUser} from "greenbowl-schema/src/user/user"

export type LoginType = {
    email: string,
    password: string
}

export const login = (payload: LoginType) => {
    return BaseApi.post('/user/login', payload)
}

export const registerUser = (payload: PartialUser ) => {
    return BaseApi.post<rUser>('/user/register',payload)
}