import React from 'react'
import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const NavItems = () => {
    return (
        <ul className={classes.NavItems}>
            <NavItem link="/" active={true}> BUrger Order </NavItem>
            <NavItem link="/"> Checkout </NavItem>
        </ul>
    );
}

export default NavItems;