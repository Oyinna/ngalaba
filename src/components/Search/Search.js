import React from 'react';
import classes from './Search.css';
import app from '../../assets/images/app.png';

const search = (props) => {
  
  return(
      <div>
        <div className={classes.search}>
          SEARCH, CONNECT, TRANSACT. <br/><br/>
          <div className={classes.map}><br/><br/>
            National Map of all Markets
            <div className={classes.app}><br/>
              <img src={app} alt="MyLogo"/>
            </div><br/><br/>
            <div className={classes.p}>
              Over <span className={classes.g}>973</span> markets & <br/><span className={classes.g}>45,779</span> businesses listed
            </div>
          </div>

        </div> 
      </div>
  )}

export default search;