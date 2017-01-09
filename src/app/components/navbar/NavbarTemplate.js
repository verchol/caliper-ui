import React from 'react';
import { Link, IndexLink } from 'react-router';


const NavbarTemplate = () => {
    return (
        <div className="navigation">
            <div className="navigation__logo">
                <Link to="/"><img src="/images/caliper.svg" alt="Caliper"/></Link>
            </div>
            <nav className="navigation__navbar">
                <IndexLink to="/"><i className="fa fa-user"/>Home</IndexLink>
                <Link to="/about"><i className="fa fa-info"/>About</Link>
            </nav>
        </div>
    );
};

export default NavbarTemplate;
