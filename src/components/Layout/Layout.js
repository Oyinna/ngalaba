import React from 'react';
import {Route} from 'react-router-dom';
import Topmenu from '../Navigation/Topmenu/Topmenu';
import classes from './Layout.css';
import Footer from '../Footer/Footer';

const layout = (props) => (
<div>
<Topmenu/> <br/>
<Route path="/" exact render={()=> <main className={classes.content}>{props.children}
</main>}/><br/>
<Footer></Footer>
</div>
);

export default layout;