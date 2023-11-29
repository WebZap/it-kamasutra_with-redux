import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddPostBlock from "./AddPostBlock/AddPostBlock";

const MyPosts = ({postsData,setProfilePost}) => {
    const onSubmit = (values) => {
        setProfilePost(values.postMessage)
    }
    return (
        <div className={s.postsBlock}>
            My posts
            <AddPostBlock onSubmit={onSubmit}/>
            <div>NewPost</div>
            <div>
                {postsData.map((item) => (
                    <Post
                        key={item.id}
                        message={item.message}
                        countLike={item.countLikes}
                        img={item.img}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyPosts;
