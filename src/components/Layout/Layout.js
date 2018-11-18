import React , {Component} from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class  Layout extends Component{
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }
    sideDrawerOpenedHandeler = () => {
        this.setState({showSideDrawer: true})
    }
    render(){
        return (
        <Aux>
        <Toolbar click={this.sideDrawerOpenedHandeler}/>
        <SideDrawer closeDrawer={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
        </Aux>
        );
    }
};

export default Layout;