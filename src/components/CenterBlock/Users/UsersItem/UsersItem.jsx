/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import style from "../Users.module.css";
import userImg from "./../../../../assets/149071.png";
import { NavLink } from "react-router-dom";
const UsersItem = ({
    id,
    followStatus,
    img,
    name,
    status,
    followUser,
    unfollowUser,
    followingInProgress,
}) => {
    return (
        <div className={style.user_card}>
            <NavLink to={`/profile/${id}`}>
                {" "}
                {/* переход на компоненту юзера одного*/}
                <img
                    src={img != null ? img : userImg}
                    alt="User Photo"
                    className={style.user_photo}
                />
            </NavLink>
            <div className={style.user_info}>
                <div className={style.user_name}>Имя:{name}</div>
                <div className={style.user_status}>{status}</div>
                {followStatus ? ( //false
                    <button
                        disabled={followingInProgress.some(
                            (item) => item === id
                        )}
                        onClick={() => unfollowUser(id)}
                        className={style.subscribe_button}
                    >
                        Отписаться
                    </button>
                ) : (
                    <button
                        disabled={followingInProgress.some(
                            (item) => item === id
                        )}
                        onClick={() => followUser(id)}
                        className={style.subscribe_button}
                    >
                        Подписаться
                    </button>
                )}
            </div>
        </div>
    );
};
export default UsersItem;
