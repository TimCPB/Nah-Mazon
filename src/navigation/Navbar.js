import React from 'react';
import {
    Link
} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="teal">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">Nah'mazon</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <Link to="/profile/1">My Profile</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar