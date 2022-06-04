import React from "react";

import classes from "./header.module.css";
import { NavLink, Link } from "react-router-dom";


const Header = () => {

    return (
        <div>
            <h2>Header</h2>

            <ul className={classes.menu}>
                <li>
                    <NavLink className={classes.link} to="/student">Students Page</NavLink>
                </li>
                <li>
                    <NavLink className={classes.link} to="/news">News Page</NavLink>
                </li>
                <li>
                    <NavLink className={classes.link} to="/contact">Contacts Page</NavLink>
                </li>
            </ul>
        </div>
    )
};

export default Header;
