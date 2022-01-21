import React, { useEffect } from "react";
import "./register.scss";
import Header from "../header/header";
import RegisterForm from "./RegisterForm";

export default function Register() {
    useEffect(() => {
        if (localStorage.getItem('logged')) {
            window.location.href = '/';
        }
    });

    return (
        <>
            <Header />
            <RegisterForm />
        </>
    )
}