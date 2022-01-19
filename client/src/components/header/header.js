import React from "react";
import { Link } from 'react-router-dom';
import "./header.css";

export default function Header() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </div>
    )
}