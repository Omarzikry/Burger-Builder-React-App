import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
const toolbar = (props) => {
    return (
       <header className={classes.Toolbar}>
           <div onClick={props.click} className={classes.menuToggle}><i className="fas fa-bars"></i></div>
           <div className={classes.logo}>
           <Logo />
           </div>
           <nav className={classes.desktopOnly}>
               <NavigationItems />
           </nav>
       </header>
    );
}

export default toolbar;
