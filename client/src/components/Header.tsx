import React from 'react';

import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'

import { Link, NavLink } from 'react-router-dom'

function Header(): JSX.Element {
    return (
        <Navbar
            color="dark"
            expand="md"
            dark
        >
            <NavbarBrand>
                <NavLink to='/' className="header-brand">
                    RACERS
                </NavLink>
            </NavbarBrand>
            <Nav
                navbar
            >
                <NavItem>
                    <NavLink to='/cards' className="nav-item">
                        Racers
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to='/statistic' className="nav-item">
                        Statistic
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/map' className="nav-item">
                        Map
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/create' className="nav-item">
                        Create racer
                    </NavLink>
                </NavItem>
            </Nav>

        </Navbar>
    )
}
export default Header