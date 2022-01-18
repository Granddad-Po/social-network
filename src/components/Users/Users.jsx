import s from "./Users.module.css";
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUserCount, pageSize, users, ...props}) => {

    return (
        <div>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalItemCount={totalUserCount}
                       pageSize={pageSize} />
            <div className={s.usersPage}>
                {
                    users.map(u => <User user={u}
                                         followingInProgress={props.followingInProgress}
                                         follow={props.follow}
                                         unfollow={props.unfollow}
                                         key={u.id} />
                    )
                }
            </div>
        </div>
    )
}

export default Users;