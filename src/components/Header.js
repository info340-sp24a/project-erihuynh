import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export function Header() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
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

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

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
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbarCustom">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" exact>
                        Persona Playground
                    </NavLink>
                    <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-controls="navbarNavAltMarkup" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to="/" exact>
                                Home
                            </NavLink>
                            <NavLink className="nav-link" to="/create-quiz">
                                Create Quiz
                            </NavLink>
                            <NavLink className="nav-link" to="/profile">
                                Profile
                            </NavLink>
                        </div>
                        <div className="navbar-nav ml-auto">
                            {currentUser ? (
                                <NavLink className="nav-link" to="/" onClick={handleSignOut}>
                                    Sign Out
                                </NavLink>
                            ) : (
                                <NavLink className="nav-link" to="/sign-in">
                                    Sign In
                                </NavLink>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
