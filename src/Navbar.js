import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="teal">
                    <div className="nav-wrapper">
                        <a className="brand-logo" href="/">Nah'mazon</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/profile">My Profile</a></li>
                            <li><a href="#">Sign Up</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar