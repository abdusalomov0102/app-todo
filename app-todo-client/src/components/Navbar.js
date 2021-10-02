import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <>

            {/*    Navbar Component*/}
            <nav className="navbar navbar-expand-sm navbar-dark bg-secondary mb-4">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        Project Task Tool
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#mobile-nav"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                </div>
            </nav>

        </>
    );
}

export default Navbar;