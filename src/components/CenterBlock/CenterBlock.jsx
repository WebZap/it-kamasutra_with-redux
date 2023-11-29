import React from "react";
import s from "./CenterBlock.module.css";
import {Route, Routes} from "react-router-dom";

import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

import DialogsContainer from "./Dialogs/DialogsContainer";

import ContainerUsers from "./Users/ContainerUsers";
import ContainerProfile from "./Profile/ContainerProfile";
import Login from "../../pages/LoginForm/Login";

const CenterBlock = () => {
    return (
        <div className={s.contentWrapper}>
            <Routes>
                <Route
                    path="/profile/:userId?/*"
                    element={<ContainerProfile />}
                />
                <Route path="/dialogs/" element={<DialogsContainer />} />
                <Route path="/news" element={<News />} />
                <Route path="/my-music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/users" element={<ContainerUsers />} />
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    );
};

export default CenterBlock;
