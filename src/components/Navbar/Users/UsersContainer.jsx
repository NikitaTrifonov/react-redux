import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "./../../common/Preloader";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowProcess,
} from "../../../redux/users-reducer";
import { usersAPI } from "../../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        if (this.props.users.length === 0) {
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
        }
        this.props.toggleIsFetching(false);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.currentPage).then((data) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    };

    follow = (userId) => {
        this.props.toggleFollowProcess(true, userId);
        usersAPI.follow(userId).then((data) => {
            if (data.resultCode === 0) {
                this.props.follow(userId);
            }
            this.props.toggleFollowProcess(false, userId);                     
        });
    };

    unfollow = (userId) => {
        this.props.toggleFollowProcess(true, userId);
        usersAPI.unfollow(userId).then((data) => {
            if (data.resultCode === 0) {
                this.props.unfollow(userId);
            }
            this.props.toggleFollowProcess(false, userId);          
        });
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    follow={this.follow}
                    unfollow={this.unfollow}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    followingInProgress={this.props.followingInProgress}
                    toggleFollowProcess={this.props.toggleFollowProcess}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowProcess,
})(UsersContainer);
