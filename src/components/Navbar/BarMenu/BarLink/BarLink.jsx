import React from "react";
import { NavLink } from "react-router-dom";
import s from "../BarMenu.module.css";

const BarLink = ({ path, nameLink }) => {
    return (
        <li className="item">
            <NavLink
                to={path}
                className={({ isActive }) => (isActive ? s.active : s.item)}
            >
                {nameLink}
            </NavLink>
        </li>
    );
};

export default BarLink;
