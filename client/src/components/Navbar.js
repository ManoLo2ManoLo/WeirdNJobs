import React from 'react';
import { Navbar } from 'react-bulma-components';
import logo from '../assets/images/WeirdNJobs.png';

function Navbars() {
    const { NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu, NavbarContainer, NavbarLink, NavbarDivider} = Navbar;
    return(
        <Navbar>
            <NavbarBrand>
                <NavbarItem href='#'>
                    <img src={logo} alt='Logo for site' height={40} width={120}/>
                </NavbarItem>
                <NavbarBurger />
            </NavbarBrand>
            <NavbarMenu>
                <NavbarContainer>
                    <NavbarItem href='#Home'>
                        <NavbarLink>
                            Home
                        </NavbarLink>
                    </NavbarItem>
                </NavbarContainer>
                <NavbarContainer align='end'>
                    <NavbarItem href='#LogIn'>
                        Log In
                    </NavbarItem>
                </NavbarContainer>
                <NavbarDivider />
                <NavbarContainer align='end'>
                    <NavbarItem href='#LogIn'>
                        Sign Up
                    </NavbarItem>
                </NavbarContainer>
            </NavbarMenu>
        </Navbar>
    )
};

export default Navbars;