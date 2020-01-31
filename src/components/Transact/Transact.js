import React from 'react';
import classes from './Transact.css';
import partners from '../../assets/images/partners.png';

const connect = (props) => {
  
  return(
      <div>
        <div className={classes.Transact}>
            <div className={classes.mn}>
            <div className={classes.card}><br/>
                <span className={classes.tss}>GET LISTED ON</span><br/>
                <div className={classes.ttt}></div>
                <button className={classes.bn}>START HERE</button>
            </div>
            <div className={classes.card}><br/>
                <span className={classes.ts}> NEED HELP ?</span><br/><br/>
                <span className={classes.tt}>REACH US NOW</span>
                <button className={classes.bn}>CONTACT US</button>
            </div>
            <div className={classes.card}><br/>
                <span  className={classes.ts}>SUGGEST A NEW</span><br/><br/>
                <span className={classes.tt}>MARKET</span>
                <button className={classes.bn}>SUGGEST HERE</button>
            </div>
            </div>
        </div>
        <div className={classes.mnn}>
            <span>Popular:Lagos|FCT Abuja|Abia|Kano|Edo</span>
            <span className={classes.sp}>In partnership with:<img src={partners} alt="MyLogo" className={classes.ph}/></span>
         </div>

      </div>
  )}

export default connect;