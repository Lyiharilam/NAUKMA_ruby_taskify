import React, { useState } from "react";
import "./RegisterForm.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { register as handleRegister } from "../../store/actions/auth";
import { Navigate } from "react-router-dom";
import * as Yup from "yup";

const RegisterForm = () => {

    const dispatch = useDispatch();
    const [isRegisteredSuccessfully, setIsRegisteredSuccessfully] = useState(false)

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        email: Yup.string().email().required("Email is required"),
        password: Yup.string().required("Password is required").test('len', 'Password is too short (minimum is 6 characters)', val => val.length >= 6)
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState, reset } = useForm(formOptions);

    const { errors } = formState;

    const [serverErrors, serServerErrors] = useState("")

    const onSubmit = (data) => {
        dispatch(handleRegister(data.username, data.email, data.password)).then((res) => {
            if (res?.isError) {
                let errorsMessages = "";
                res.message.errors.forEach(err => {
                    errorsMessages = err + ', ' + errorsMessages
                })
                serServerErrors(errorsMessages)
            } else {
                setIsRegisteredSuccessfully(true)
            }
        })
    };
    return (
        <>
            {!isRegisteredSuccessfully
                ? <div className="row d-flex justify-content-center py-5">
                    <form
                        className="application-form col-6"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div
                            className="application-form__title text-uppercase w-100 text-center"
                        >
                            Registration form
                        </div>
                        <div className="form-row">
                            <div className="form-group col input-wrapper my-3">
                                <label>Username</label>
                                <input
                                    placeholder="Username"
                                    name="username"
                                    type="text"
                                    {...register("username")}
                                    className={`form-control ${errors.username ? "is-invalid" : ""}`}
                                    autoComplete="on"
                                />
                                <div className="invalid-feedback validation-error">
                                    {errors.username?.message}
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col input-wrapper my-3">
                                <label>Email</label>
                                <input
                                    placeholder="Email"
                                    name="email"
                                    type="text"
                                    {...register("email")}
                                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                    autoComplete="on"
                                />
                                <div className="invalid-feedback validation-error">
                                    {errors.email?.message}
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col input-wrapper my-3">
                                <label>Password</label>
                                <input
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    {...register("password")}
                                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                    autoComplete="off"
                                />
                                <div className="invalid-feedback validation-error">
                                    {errors.password?.message}
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button
                                type="submit"
                                className="py-2 text-white text-uppercase border-0 w-100 bg-dark cursor-pointer"
                            >
                                Register
                            </button>
                        </div>
                        {serverErrors &&
                            <div className="server-errors d-flex justifu-content-center mt-2">
                                <div className="invalid-feedback" style={{ display: "block" }}>{serverErrors}</div>
                            </div>
                        }
                    </form>
                </div>
                : <Navigate to="/login" />
            }
        </>

    );
};

export default RegisterForm;
