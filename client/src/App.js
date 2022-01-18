import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/about' element={<About />}></Route>
                <Route exact path='/projects' element={<Projects />}></Route>
            </Routes>
        </Router>
    )
}