import axios from "axios";
import React, { useRef } from "react";

export default function LoginForm() {
    const username = useRef();
    const password = useRef();

    const login = () => {
        const new_username = username.current.value;
        const new_password = password.current.value;

        const user_data = {
            username: new_username,
            password: new_password
        }

        axios.post("/login", user_data)
            .catch(err => console.error(err));

        axios.post("/login").then(({data}) => {
            console.log(data);
        })
    }

    return (
        <>
            <form onSubmit={login}>
                <input type="text" placeholder="Username" ref={username} />
                <input type="password" placeholder="Password" ref={password} />
                <input type="submit" value="Login" />
            </form>
        </>
    )
}