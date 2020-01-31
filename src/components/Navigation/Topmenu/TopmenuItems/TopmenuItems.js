import React from 'react';
import classes from './TopmenuItems.css'
import TopmenuItem from './TopmenuItem/TopmenuItem';

const TopmenuItems = () => (
    <ul className={classes.TopmenuItems}>
        <TopmenuItem link="/home" active>Home</TopmenuItem>
        <TopmenuItem link="/home" active>Markets</TopmenuItem>
        <TopmenuItem link="/home" active>Suggest a New Market</TopmenuItem>
        <TopmenuItem link="/home" active>Contact Us</TopmenuItem>
    </ul>
);

export default TopmenuItems;