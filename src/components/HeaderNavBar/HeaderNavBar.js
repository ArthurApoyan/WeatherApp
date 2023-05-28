import React from 'react';

import "./headerNavBar.css";
import {NavLink} from "react-router-dom";

const HeaderNavBar = () => {
    return (
        <ul className="navBar">
            <li><NavLink className="navBarLink" to="/">Current Weather</NavLink></li>
            <li><NavLink className="navBarLink" to="/fiveDay">5 Day Weather Forecast</NavLink></li>
        </ul>
    );
};

export default HeaderNavBar;