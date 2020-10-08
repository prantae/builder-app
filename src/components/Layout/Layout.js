import React from 'react';
import Aux from '../../hoc/Auxilary'
import './Layout.css';

import classes from './Layout.css';

const layout = (props) => (
    <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>

    {/*This works */}
    <main className="Content">
        {props.children}
    </main>
    {/*But this doesn't work*/}
    <main className={classes.Content}>
        {props.children}
    </main>
    </Aux>
);

export default layout;