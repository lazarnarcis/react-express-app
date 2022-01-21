import React, { useEffect } from "react";

export default function Logout() {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = "/login";
            localStorage.removeItem("logged");
            localStorage.removeItem("email");
            localStorage.removeItem("username");
        }, 1500);
    });
    return (
        <>
            <h1>Logging out...</h1>
        </>
    )
}