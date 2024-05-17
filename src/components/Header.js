import React, { useState } from 'react';

export function Header() {
    const [activeLink, setActiveLink] = useState('home');
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    
    const handleClick = (link) => {
        setActiveLink(link);
    };
    
    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbarCustom">
                <div className="container-fluid">
                    <a className={`navbar-brand ${activeLink === 'home' ? 'active' : ''}`} href="#" onClick={() => handleClick('home')}>Persona Playground</a>
                    <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-controls="navbarNavAltMarkup" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} href="#" onClick={() => handleClick('home')}>Home</a>
                            <a className={`nav-link ${activeLink === 'create-quiz' ? 'active' : ''}`} href="#" onClick={() => handleClick('create-quiz')}>Create Quiz</a>
                            <a className={`nav-link ${activeLink === 'profile' ? 'active' : ''}`} href="#" onClick={() => handleClick('profile')}>Profile</a>
                        </div>
                        <div className="navbar-nav ml-auto">
                            <a className={`nav-link ${activeLink === 'signin' ? 'active' : ''}`} href="#" onClick={() => handleClick('signin')}>Sign In</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
