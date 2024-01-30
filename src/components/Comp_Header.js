import React from "react";
function Header() {
    return(
        <header>
            <div className="header-box">
                <div className="header-left">
                    <span><i className="fas fa-align-left"></i></span>
                </div>
                <nav className='header_bar'>
                <div className="header_links">
                    <ul>
                        <li>Accueil</li>         
                        <li>Profil</li>
                        <li>Sign in</li>
                    </ul>
                </div>
            </nav>
                <div className="header-right">
                    <span><i className="fas fa-search"></i></span>
                    <span><i className="fas fa-user"></i></span>
                </div>
            </div>
        </header>
    );
}
export default Header;