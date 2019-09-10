import {
    REGISTER_SUCCESS,
    USER_LOADEDADED,
    AUTH_ERRORROR,
    LOGIN_FAILAIL,
    LOGOUT,
    CLEAR_ERRORS,
    REGISTER_FAIL
 } from '../types'

 export default (state, action) => {
     switch(action.type){
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL: 
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
     }
 }