import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({
    dataEntireUser,
    postsData,
    setProfilePost,
}) => {
    console.log(dataEntireUser);
    return (
        <main>
            <ProfileInfo dataEntireUser={dataEntireUser} />
            <MyPosts
                postsData={postsData}
                setProfilePost={setProfilePost}
            />
        </main>
    );
};

export default Profile;
