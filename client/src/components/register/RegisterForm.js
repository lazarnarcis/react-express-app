import React, { useRef, useState } from "react";
import axios from "axios";

export default function RegisterForm() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const [message, setMessage] = useState(null);

    const createAccount = (e) => {
        e.preventDefault();
        const new_username = username.current.value;
        const new_email = email.current.value;
        const new_password = password.current.value;

        if (new_username === "") {
            setMessage("Please enter a username!");
            return;
        } else if (new_email === "") {
            setMessage("Please enter an email!");
            return;
        } else if (new_password === "") {
            setMessage("Please enter a password!");
            return;
        }
        
        const user_data = {
            username: new_username,
            email: new_email,
            password: new_password
        }
        
        axios.post('/register', user_data)
            .then(res => setMessage(res.data.message))
            .catch(err => console.error(err));
    }

    return (
        <>
            <form onSubmit={createAccount}>
                <div>
                    <input type="text" placeholder="Username" ref={username} />
                </div>
                <div>
                    <input type="email" placeholder="Email" ref={email} />
                </div>
                <div>
                    <input type="password" placeholder="Password" ref={password} />
                </div>
                <p>{message}</p>
                <div>
                    <input type="submit" value="Create Account" />
                </div>
            </form>
        </>
    )
}