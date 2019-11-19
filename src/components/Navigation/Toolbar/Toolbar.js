import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrawerToggler from '../NavItems/SideDrawer/DrawerToggler/DrawerToggler';
const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggler click={props.menuclick}></DrawerToggler>
            <Logo height="80%"></Logo>
            <nav className={classes.DesktopOnly}>
                <NavItems  ></NavItems>
            </nav>
        </header>
    );
}

export default Toolbar;