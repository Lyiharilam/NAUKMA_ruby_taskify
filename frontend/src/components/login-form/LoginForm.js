import React from "react";
import "./LoginForm.scss";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/auth";
import * as Yup from "yup";

const LoginForm = () => {

    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),
        password: Yup.string().required("Password is required")
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState, reset } = useForm(formOptions);

    const { errors } = formState;

    const onSubmit = (data) => {
        dispatch(login(data.email, data.password))
    };
    return (
        <div className="row d-flex justify-content-center py-5">
            <form
                className="application-form col-6"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div
                    className="application-form__title text-uppercase w-100 text-center"
                >
                    Please sign in
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
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
