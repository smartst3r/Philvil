import React from 'react';

import Aux from '../../hoc/Auxi';
import classes from './Layout.css'

const layout = (props) => (
    <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
        {props.children}
    </main>
    </Aux>
);

export default layout;