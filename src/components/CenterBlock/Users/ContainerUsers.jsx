import {
    followUser,
    isFethingProgress,
    setCountUsers,
    setEntirePage,
    setUsers,
    setUsersToPage,
    toggleFollowingProgress,
    unfollowUser,
} from "../../../redux/redusers/users_page_reducer";

import { AuthRedirectHOC } from "../../../hoc/AuthRedirectComponent";
import Loader from "./Loader/Loader";
import React from "react";
import Users from "./Users";
import { compose } from "redux";
import { connect } from "react-redux";

class UsersAPIprovider extends React.Component {
    componentDidMount() {
        this.props.setUsers(this.props.currentPage);
    }

    onChangedPage = (number) => {
        this.props.setUsersToPage(number);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <Loader />
                ) : (
                    <Users
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        usersList={this.props.usersList}
                        followUser={this.props.followUser}
                        unfollowUser={this.props.unfollowUser}
                        onChangedPage={this.onChangedPage}
                        pageSize={this.props.pageSize}
                        toggleFollowingProgress={
                            this.props.toggleFollowingProgress
                        }
                        followingInProgress={this.props.followingInProgress}
                    />
                )}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.users, //получаю массива объектов
        pageSize: state.usersPage.pageSize, //размер страницы
        totalUsersCount: state.usersPage.totalUsersCount, // всего колво пользователей
        currentPage: state.usersPage.currentPage, //текущая страницы
        isFetching: state.usersPage.isFetching, //процесс заггрузки,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

export default compose(
    connect(mapStateToProps, {
        unfollowUser,
        followUser,
        setUsers,
        setCountUsers,
        setEntirePage,
        isFethingProgress,
        toggleFollowingProgress,
        setUsersToPage,
    }),
    AuthRedirectHOC
)(UsersAPIprovider);
