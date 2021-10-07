import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "./../../common/Preloader";
import { setUsers, getUsers, follow, unfollow } from "../../../redux/users-reducer";
class UsersContainer extends React.Component {
    componentDidMount = () => this.props.getUsers(this.props.currentPage, this.props.pageSize);

    onPageChanged = (pageNumber) => this.props.getUsers(pageNumber, this.props.pageSize);

    follow = (userId) => this.props.follow(userId);

    unfollow = (userId) => this.props.unfollow(userId);

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
    setUsers,
    getUsers,
    follow,
    unfollow,
})(UsersContainer);
