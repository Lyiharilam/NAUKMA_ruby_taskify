import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./types";

import AuthService from "../../services/auth.service";


export const login = (email, password) => (dispatch) => {


    //!---For test purposes only
    // dispatch({
    //     type: LOGIN_SUCCESS,
    //     payload: { user: { username: username, jwt: "blablabla" } },
    // });
    // localStorage.setItem("user", JSON.stringify({ username: username, jwt: "blablabla" }))
    //!---

    return AuthService.login(email, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            return Promise.resolve();
        },
        (error) => {
            dispatch({
                type: LOGIN_FAIL,
            });

            return Promise.reject();
        }
    );
};

export const register = (username, email, password) => (dispatch) => {
    return AuthService.register(username, email, password).then(
        (data) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });
            return Promise.resolve(data);
        },
        (error) => {
            dispatch({
                type: REGISTER_FAIL,
            });
            return Promise.reject(error);
        }
    )
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};