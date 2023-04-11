import "../scss/LoginPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import LoginForm from "../components/login-form/LoginForm"
import BasicLayout from '../layouts/BasicLayout'

const LoginPage = () => {

    const { user: currentUser } = useSelector((state) => state.auth);

    return (
        <BasicLayout>
            {!currentUser
                ? <div className="container">
                    <div className="row">
                        <div className="col p-4">
                            <LoginForm />
                        </div>
                    </div>
                </div>
                :
                <Navigate to="/" />
            }

        </BasicLayout>
    );
};

export default LoginPage;
