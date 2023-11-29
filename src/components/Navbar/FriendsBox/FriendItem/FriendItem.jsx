import React from 'react';
import s from "./FriendItem.module.css";

const FriendItem = ({src, name}) => {
    return (

            <div className={s.box_friends}>
                <div className={s.friends_item}>
                    <img src={src} alt="" className={s.profile_img}/>
                    <div className={s.profile_name}>{name}</div>
                </div>
            </div>

    );
};

export default FriendItem;