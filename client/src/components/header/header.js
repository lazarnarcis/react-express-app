import React from "react";
import { Link } from 'react-router-dom';
import "./header.scss";

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