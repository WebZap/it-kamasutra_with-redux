import React, { useEffect } from "react";

import Header from "./Header";
import { connect } from "react-redux";
import { setUserData } from "../../redux/redusers/auth_reducer";
const HeaderContainer = (props) => {
    useEffect(() => {
        props.setUserData();
    }, []);

    return <Header {...props} />;
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    };
};

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
