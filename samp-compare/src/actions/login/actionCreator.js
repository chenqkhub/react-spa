/***action 生成器 */
import actionTypes from './actionTypes'

export const showRegister = (value) => ({
    type: actionTypes.SHOW_REGISTER,
    value
})
export const showRetrieve = (value) => ({
    type: actionTypes.SHOW_RETRIEVE,
    value
})
export const loginStyle = (value) => ({
    type: actionTypes.LOGIN_STYLE,
    value
})
export const loginRegisterForgot = (value) => ({
    type: actionTypes.CURRENT_MODULE,
    value
})
