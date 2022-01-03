import s from "./Users.module.css";
import userPhoto from "../../images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                        <button onClick={ () => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            withCredentials: true,
                                headers: {
                                    'API-KEY': 'ea7e661d-f340-4c0e-b12e-b599197c412e'
                                }
                            }).then(response => {
                            if (response.data.resultCode == 0) {
                                props.unfollow(u.id)
                            }
                        })
                        }}>Unfollow</button>
                        : <button onClick={ () => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'ea7e661d-f340-4c0e-b12e-b599197c412e'
                                }
                            }).then(response => {
                                if (response.data.resultCode == 0) {
                                    props.follow(u.id)
                                }
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