import axios from "axios";
import React, { useRef, useState } from "react";

export default function LoginForm() {
    const [message, setMessage] = useState(null);
    const username = useRef();
    const password = useRef();

    const login = (e) => {
        e.preventDefault();
        const new_username = username.current.value;
        const new_password = password.current.value;

        if (new_username === "") {
            setMessage("Please enter a username!");
            return;
        } else if (new_password === "") {
            setMessage("Please enter a password!");
            return;
        }

        const user_data = {
            username: new_username,
            password: new_password
        }

        axios.post("/login", user_data)
            .then(res => setMessage(res.data.message))
            .catch(err => console.error(err));
    }

    return (
        <>
            <form onSubmit={login}>
                <div>
                    <input type="text" placeholder="Username" ref={username} />
                </div>
                <div>
                    <input type="password" placeholder="Password" ref={password} />
                </div>
                <p>{message}</p>
                <input type="submit" value="Login" />
            </form>
        </>
    )
}