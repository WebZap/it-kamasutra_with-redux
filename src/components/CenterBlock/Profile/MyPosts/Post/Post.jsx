import React from "react";
import s from "./Post.module.css";

const Post = ({message, countLike, img}) => {
    return (
        <div className={s.item}>
            <img
                src={img}
                alt="avatarka"
            />
            <div className={s.messageBlock}>
                <div>{message}</div>
                <button>Like!</button>
            </div>

            <div>

                <div>Count likes : {countLike}</div>
            </div>
        </div>
    );
};

export default Post;
