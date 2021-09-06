import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
const Navbar = () => {
    return (
        <>
            <Nav> 
                <NavLink to="/">
                    <h1> Logo </h1>
                </NavLink> 
                <Bars />
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                </NavMenu>
                <NavBtn> 
                    <NavBtnLink to ="/mylist"> My List </NavBtnLink>
                </NavBtn>

                <NavBtn> 
                    <NavBtnLink to="/logout"> Log Out </NavBtnLink>
                </NavBtn>
            </Nav>
            <body> </body>
        </>
    )
}

export default Navbar
