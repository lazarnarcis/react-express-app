import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Home from "./components/home";
import Register from "./components/register/register";
import Login from "./components/login/login";
import Logout from "./components/logout";

export default function URoutes() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route exact path='/register' element={<Register />}></Route>
                    <Route exact path='/login' element={<Login />}></Route>
                    <Route exact path='/logout' element={<Logout />}></Route>
                </Routes>
            </Router>
        </>
    )
}