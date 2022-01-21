import React, { useEffect } from "react";
import Header from "./header/header";

export default function Home() {
    const logged = localStorage.getItem('logged');
    useEffect(() => {
        if (logged !== "true") {
            window.location.href = '/login';
        }
    });

    return (
        <div>
            <Header />
            {logged ? localStorage.getItem("username") : null}
        </div>
    )
}