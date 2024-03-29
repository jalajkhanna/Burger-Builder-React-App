import React from 'react'
import classes from './DrawerToggle.module.css';

const DrawerToggler = (props) => {
    return (
        <div className={classes.DrawerToggle} onClick={props.click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        );
}

export default DrawerToggler;