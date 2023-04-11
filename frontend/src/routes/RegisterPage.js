import "../scss/RegisterPage.scss";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect, useCallback } from "react";
import BasicLayout from '../layouts/BasicLayout'
import RegisterForm from "../components/register-form/RegisterForm";

const RegisterPage = () => {

    const { user: currentUser } = useSelector((state) => state.auth);

    return (
        <BasicLayout>
            {!currentUser
                ? <div className="container">
                    <div className="row">
                        <div className="col p-4">
                            <RegisterForm />
                        </div>
                    </div>
                </div>
                :
                <Navigate to="/" />
            }

        </BasicLayout>
    );
};

export default RegisterPage;
