import React from "react";

import s from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import CenterBlock from "./components/CenterBlock/CenterBlock";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
        <div className={s.appWrapper}>
            <HeaderContainer />
            <Navbar />
            <CenterBlock />
        </div>
    );
};
export default App;
