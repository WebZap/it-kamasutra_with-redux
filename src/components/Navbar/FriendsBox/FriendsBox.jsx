import React from "react";
import s from "./FriendsBox.module.css";
import FriendItem from "./FriendItem/FriendItem";
const FriendsBox = (props) => {
    const { friendsBox } = props;
    const friends = friendsBox.map((friend) => (
        <FriendItem name={friend.name} src={friend.src} key={friend.id} />
    ));
    console.log(friends);
    return (
        <div className={s.box}>
            <h1 className={s.friends_logo}>Friends</h1>
            <div className={s.wrapp_friends}>{friends}</div>
        </div>
    );
};

export default FriendsBox;
