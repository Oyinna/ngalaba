import React from 'react';
import classes from './Connect.css';
import partners from '../../assets/images/partners.png';

const connect = (props) => {
  
  return(
      <div className={classes.connect}>
        <span className={classes.or}>GET</span> YOUR ONLINE POS
        <hr className={classes.hr}/>
        <div className={classes.card}>
        <img src={partners} alt="MyLogo"/>
        </div>
        <span className={classes.or}>FEATURE</span> BUSINESSES
      </div>
  )}

export default connect;