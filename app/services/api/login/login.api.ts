import baseApi from "../base"

export type LoginType = {
    email: string,
    password: string
}

export const login = (payload: LoginType) => {
    return baseApi.post('/user/login', {json: payload}).json()
}