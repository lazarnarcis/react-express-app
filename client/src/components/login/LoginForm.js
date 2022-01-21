import axios from "axios";
import React, { useRef, useState, useEffect } from "react";

export default function LoginForm() {
    const [message, setMessage] = useState(null);
    const username = useRef();
    const password = useRef();
    const [userData, setUserData] = useState();

    useEffect(() => {
        if (localStorage.getItem('logged')) {
            window.location.href = '/';
        }
    });

    const isFirstRun = useRef(true);
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }

        localStorage.setItem('username', userData.username);
        localStorage.setItem('email', userData.email);
        localStorage.setItem('logged', userData.logged); 
        if (userData.redirect) {
            console.log("redirecting to main page");
            setTimeout(() => {
                window.location.href = userData.redirect;
            }, 1500);
        }  
    }, [userData]);

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
            .then(res => {
                setMessage(res.data.message)
                setUserData(res.data.userdata)
            })
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