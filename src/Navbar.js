import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="teal">
                <div className="nav-wrapper">
                    <a className="brand-logo" href="#">Nah'mazon</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">My Profile</a></li>
                        <li><a href="#">Sign Up</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar