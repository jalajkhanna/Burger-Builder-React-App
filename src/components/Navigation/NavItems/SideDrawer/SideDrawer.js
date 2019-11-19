import React from 'react';
import Logo from '../../../Logo/Logo';
import NavItems from '../NavItems';
import classes from './SideDrawer.module.css';
import Aux from '../../../../hoc/Auxilary';
import Backdrop from '../../../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
    let classesArray = [classes.SideDrawer, classes.Close];
    if(props.open) {
        classesArray = [classes.SideDrawer, classes.Open];

    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
        <div className={classesArray.join(' ')}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavItems/>
            </nav>
        </div>
        </Aux>
    );
}

export default SideDrawer;