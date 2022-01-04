import s from "./Users.module.css";
import userPhoto from "../../images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i <= 20)
            pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : s.pageNumber}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            <div className={s.usersPage}>
                {
                    props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.ava} src={u.photos.small != null ? u.photos.small : userPhoto}
                                    alt='avatar'/>
                            </NavLink>
                        </div>
                        <div>
                    {u.followed ?
                        <button disabled={props.followingInProgress.some( id => id === u.id)} onClick={ () => {
                            props.toggleFollowingProgress(true, u.id);
                            usersAPI.unfollow(u.id)
                                .then(data => {
                            if (data.resultCode == 0) {
                                props.unfollow(u.id)
                            }
                            props.toggleFollowingProgress(false, u.id)
                        })
                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some( id => id === u.id)} onClick={ () => {
                            props.toggleFollowingProgress(true, u.id);
                            usersAPI.follow(u.id)
                                .then(data => {
                                if (data.resultCode == 0) {
                                    props.follow(u.id)
                                }
                                props.toggleFollowingProgress(false, u.id)
                            })
                        }
                        }>Follow</button>
                    }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div className={s.name}>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                    </span>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Users;