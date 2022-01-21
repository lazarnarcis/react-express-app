import React, { useEffect } from "react";
import Header from "../header/header";
import "./login.scss";
import LoginForm from "./LoginForm";

export default function Login() {
    useEffect(() => {
        if (localStorage.getItem('logged')) {
            window.location.href = '/';
        }
    });

    return (
        <>
            <Header />
            <LoginForm />
        </>
    )
}