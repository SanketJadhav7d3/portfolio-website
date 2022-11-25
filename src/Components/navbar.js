
import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css'

export default function NavBar() {
    return (
        <div className="nav-bar">
            <h1 className="site-title">Sanket Jadhav</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
            </ul>
        </div>
    );
}
