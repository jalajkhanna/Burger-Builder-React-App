import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary'

import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/NavItems/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    }

    menuClickHandler = () => {
        this.setState( ( prevState ) =>
      {  return { showSideDrawer: !prevState.showSideDrawer};
    })};

    render() {
        return (
            <Aux>
                <Toolbar menuclick={this.menuClickHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
            </Aux>
        );
    }
}


export default Layout;