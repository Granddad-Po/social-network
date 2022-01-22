import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendItem from "./FriendItem/FriendItem";

const Navbar = (props) => {

    let friendsElement = props.friends.map( friend => <FriendItem key={friend.id} name={friend.name} ava={friend.ava} />);

    return (
        <nav className={s.nav}>
            <ul>
                <li>
                    <NavLink to='/profile'
                             className={navData => navData.isActive ? s.active : s.item}>
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dialogs'
                             className={navData => navData.isActive ? s.active : s.item}>
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/news'
                             className={navData => navData.isActive ? s.active : s.item}>
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/music'
                             className={navData => navData.isActive ? s.active : s.item}>
                        Music
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/users'
                             className={navData => navData.isActive ? s.active : s.item}>
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/settings'
                             className={navData => navData.isActive ? s.active : s.item}>
                        Settings
                    </NavLink>
                </li>
            </ul>
            <div className={s.friends}>
                <h3 className={s.title}>Friends:</h3>
                <div className={s.friendsItem}>
                    {friendsElement}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;