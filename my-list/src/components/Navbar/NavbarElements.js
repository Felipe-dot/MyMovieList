import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #363636;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #ffbc40;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    margin-left: 444px;
    @media screen and (max-width: 760px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 4px;

    @media screen and (max-width: 760px) {
        display: none;
    }
`
export const NavBtnLink = styled(Link)`
    display: inline-block;
    padding: 13px 25px;
    border-radius: 25px;
    text-decoration: none;
    color: #FFF;
    background: #696969; 
    outline: none;
    border: none;

    &:hover {
        transation: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`
