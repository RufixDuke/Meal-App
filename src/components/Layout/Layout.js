import React from 'react';

import Aux from '../../hoc/Auxilliary';
import classes from './Layout.module.css';

const layout = (props) => (

    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
        <footer>
            <div>Date</div>
            <div>More information</div>
        </footer>
    </Aux>

)

export default layout;