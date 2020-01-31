import React from 'react';
import classes from './Footer.css'
import byteone from './../../assets/images/byteone.png';

const footer = () =>(
<footer className={classes.footer}>
  <div className={classes.dv}>
    <div>@ 2016 - Copyright ngalaba.com.ng <br/><br/>
    Twitter  Facebook
    </div>
    <div>Ngalaba World|Ngalaba Africa <br/><br/>
    <img src={byteone} alt="MyLogo"/>
    </div>
  </div>
  <div className={classes.dvs}></div>
</footer>
);

export default footer;