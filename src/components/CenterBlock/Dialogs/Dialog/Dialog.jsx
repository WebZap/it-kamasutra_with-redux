import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Dialog.module.css";

const Dialog = ({id, userName}) => {


    const path = `/dialogs/${id}`
    const styleActive = ({isActive}) => isActive ? s.active : s.item

    return (
        <NavLink to={path} className={styleActive}>{userName}</NavLink>
    );
};
export default Dialog;