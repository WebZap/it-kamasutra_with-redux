import {
    ActiveStyledPage,
    StyledPage,
    StyledPageContainer,
} from "../../../styled_components/UserStyled";

import React from "react";
import UsersItem from "./UsersItem/UsersItem";
import style from "./Users.module.css";

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let countPages = [];
    for (let i = 1; i <= pageCount; i++) {
        if (countPages.length < 10) countPages.push(i);
    }

    let pagesLine = countPages.map((p) => {
        return props.currentPage === p ? (
            <ActiveStyledPage>{p}</ActiveStyledPage>
        ) : (
            <StyledPage onClick={() => props.onChangedPage(p)}>{p}</StyledPage>
        );
    });
    return (
        <div className={style.user_list}>
            <StyledPageContainer>{pagesLine}</StyledPageContainer>

            {props.usersList.map((user) => {
                return (
                    <UsersItem
                        key={user.id}
                        id={user.id}
                        followStatus={user.followed}
                        name={user.name}
                        status={user.status}
                        // country={user.country}
                        // city={user.city}
                        img={user.photos.small}
                        followUser={props.followUser}
                        unfollowUser={props.unfollowUser}
                        toggleFollowingProgress={props.toggleFollowingProgress}
                        followingInProgress={props.followingInProgress}
                    />
                );
            })}
        </div>
    );
};

export default Users;
