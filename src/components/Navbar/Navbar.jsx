import React from "react";
import s from "./Navbar.module.css";
import ContainerFriendsBox from "./FriendsBox/ContainerFriendsBox";
import ContainerBarMenu from "./BarMenu/ContainerBarMenu";

const Navbar = (props) => {
    return (
        <div className={s.nav}>
            <ContainerBarMenu />
            <ContainerFriendsBox />
        </div>
    );
};

export default Navbar;
