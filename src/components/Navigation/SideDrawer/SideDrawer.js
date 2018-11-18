import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';
const SideDrawer = (props) => {
    let attatchedClasses = [classes.SideDrawer , classes.Closed]
    if(props.open){
        attatchedClasses = [classes.SideDrawer , classes.Opened]
    }
    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closeDrawer}/>
        <div className={attatchedClasses.join(' ')} >
            <div className={classes.logo}><Logo /></div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    );
}

export default SideDrawer;
