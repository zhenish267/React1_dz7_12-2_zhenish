import React from "react";
import classes from "./footer.module.css";
import {Link, NavLink} from "react-router-dom";


const Footer = () => {

    return (
        <div>
            <h2>Footer</h2>
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

export default Footer;
