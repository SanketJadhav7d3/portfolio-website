
import React from 'react';

import NavBar from './Components/navbar.js';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/home.js';
import Projects from './pages/projects.js';
import Resume from './pages/resume.js';

export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/projects" element={<Projects />} /> 
                <Route path="/resume" element={<Resume />} /> 
            </Routes>
        </>
    );
} 

