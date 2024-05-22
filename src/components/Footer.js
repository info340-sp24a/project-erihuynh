import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="pt-3 mt-4 footerCustom">
            <ul className="nav justify-content-center border-bottom grayBorder pb-3">
                <li className="nav-item">
                    <Link to="/" className="nav-link px-2" style={{ color: 'white' }}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/create-quiz" className="nav-link px-2" style={{ color: 'white' }}>Create Quiz</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link px-2" style={{ color: 'white' }}>Profile</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signin" className="nav-link px-2" style={{ color: 'white' }}>Sign in</Link>
                </li>
            </ul>
            <p className="text-center">©INFO340 Made with love by Emily, Erica, Madelyn & Ryan</p>
        </footer>
    );
}