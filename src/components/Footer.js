// import React from 'react';
// import { Link } from 'react-router-dom';

// export function Footer() {
//     return (
//         <footer className="pt-3 mt-4 footerCustom">
//             <ul className="nav justify-content-center border-bottom grayBorder pb-3">
//                 <li className="nav-item">
//                     <Link to="/" className="nav-link px-2" style={{ color: 'white' }}>Home</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/create-quiz" className="nav-link px-2" style={{ color: 'white' }}>Create Quiz</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/profile" className="nav-link px-2" style={{ color: 'white' }}>Profile</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/signin" className="nav-link px-2" style={{ color: 'white' }}>Sign in</Link>
//                 </li>
//             </ul>
//             <p className="text-center">©INFO340 Made with love by Emily, Erica, Madelyn & Ryan</p>
//         </footer>
//     );
// }

import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export function Footer() {
    const [currentUser, setCurrentUser] = useState(null); // Manage current user state internally
    const navigate = useNavigate();

    useEffect(() => {
        const authenticator = getAuth();
        const unsubscribe = onAuthStateChanged(authenticator, (user) => {
            setCurrentUser(user); // Set current user when auth state changes
        });

        return () => {
            unsubscribe(); // Unsubscribe from auth state changes when component unmounts
        };
    }, []);

    const authenticator = getAuth();

    const handleSignOut = () => {
        signOut(authenticator)
            .then(() => {
                // Sign-out successful.
                navigate('/sign-in'); // Redirect to sign-in page
            })
            .catch((error) => {
                // An error happened.
                console.error('Error signing out:', error);
            });
    };

    return (
        <footer className="pt-3 mt-4 footerCustom">
            <ul className="nav justify-content-center border-bottom grayBorder pb-3">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link px-2" style={{ color: 'white' }}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/create-quiz" className="nav-link px-2" style={{ color: 'white' }}>Create Quiz</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/profile" className="nav-link px-2" style={{ color: 'white' }}>Profile</NavLink>
                </li>
                <li className="nav-item">
                    {currentUser ? (
                        <NavLink to="/" className="nav-link px-2" onClick={handleSignOut} style={{ color: 'white' }}>Sign Out</NavLink>
                    ) : (
                        <NavLink to="/sign-in" className="nav-link px-2" style={{ color: 'white' }}>Sign In</NavLink>
                    )}
                </li>
            </ul>
            <p className="text-center">©INFO340 Made with love by Emily, Erica, Madelyn & Ryan</p>
        </footer>
    );
}
