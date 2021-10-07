import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../../assets/images/user.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map((p) => {
                    return (
                        <span
                            key={p}
                            className={`${classes.paginationItem} ${props.currentPage === p && classes.selectedPage}`}
                            onClick={() => props.onPageChanged(p)}
                        >
                            {p}
                        </span>
                    );
                })}
            </div>
            {props.users.map((user) => (
                <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" className={classes.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed ? (
                                <button
                                    disabled={props.followingInProgress.some((id) => id === user.id)}
                                    onClick={() => props.unfollow(user.id)}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    disabled={props.followingInProgress.some((id) => id === user.id)}
                                    onClick={() => props.follow(user.id)}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>City: {"u.location.city"}</div>
                            <div>Country: {"u.location.country"}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
