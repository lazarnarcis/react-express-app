import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./header.scss";

export default function Header() {
    const logged = localStorage.getItem("logged");
    const [logged_text, setLogged] = useState(null);

    useEffect(() => {
        if (logged === "true") {
            setLogged("Logout");
        } else {
            setLogged("Login");
        }
    }, [logged]);
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to={`/${logged_text}`}>{logged_text}</Link>
                </li>
            </ul>
        </div>
    )
}