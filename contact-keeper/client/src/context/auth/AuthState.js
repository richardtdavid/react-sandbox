import React, { useReducer } from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer'
import {
    REGISTER_SUCCESS,
    USER_LOADEDADED,
    AUTH_ERRORROR,
    LOGIN_FAILAIL,
    LOGOUT,
    CLEAR_ERRORS,
    REGISTER_FAIL
 } from '../types'

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null,
        user: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    // load user 
    const loadUser = () => console.log('load user')

    // register user
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/users', formData, config)
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            })
        }
    }
    // login user
    const loginUser = () => console.log('login user')

    // logout
    const logoutUser = () => console.log('logout user')
    // clear errors
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS })


    return (
        <AuthContext.Provider 
        value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            error: state.error,
            register,
            loadUser,
            loginUser,
            logoutUser,
            clearErrors
        }}>
            { props.children}
        </AuthContext.Provider>
    )

}

export default AuthState;