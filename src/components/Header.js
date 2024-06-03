import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Header() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    
    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
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
                            <NavLink className="nav-link" to="/sign-in">
                                Sign In
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
