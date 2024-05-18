import React from 'react';

export function Footer() {
    return (
        <footer className="pt-3 mt-4 footerCustom">
            <ul className="nav justify-content-center border-bottom grayBorder pb-3">
                <li className="nav-item">
                    <a href="#" className="nav-link px-2" style={{ color: 'white' }}>Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link px-2" style={{ color: 'white' }}>Create Quiz</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link px-2" style={{ color: 'white' }}>Profile</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link px-2" style={{ color: 'white' }}>Sign in</a>
                </li>
            </ul>
            <p className="text-center">©INFO340 Made with love by Emily, Erica, Madelyn & Ryan</p>
        </footer>
    );
}