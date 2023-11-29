import React, {useEffect} from "react";
import {
    isFethingProgress,
    setEntireUserProfile,
    setProfilePost,
    setStatus,

} from "../../../redux/redusers/profile_page_reducer";

import {AuthRedirectHOC} from "../../../hoc/AuthRedirectComponent";
import Loader from "../Users/Loader/Loader";
import Profile from "./Profile";
import {compose} from "redux";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

const ContainerProfile = (props) => {
    const {userId} = useParams();
    let curlUser = userId === "*" ? 30101 : userId;
    useEffect(() => {
        props.setEntireUserProfile(curlUser);
        props.setStatus(curlUser)
    }, [userId]);
    return <div>{props.isFetching ? <Loader/> : <Profile {...props} />}</div>;
};

const mapStateToProps = (state) => {
    return {
        dataEntireUser: state.profilePage.dataEntireUser,
        postsData: state.profilePage.postsData,
        isFetching: state.profilePage.isFetching,
    };
};

// const ContainerProfileWithRedirect = AuthRedirectHOC(ContainerProfile)

export default compose(connect(mapStateToProps, {
     setProfilePost, isFethingProgress, setEntireUserProfile, setStatus
}), AuthRedirectHOC)(ContainerProfile);
