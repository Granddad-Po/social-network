import s from './Users.module.css';
import {setUsersAC} from "../../redux/users-reducer";
import avaVit from "../../images/avatar.jpg";
import avaTim from "../../images/avaTim.JPG";
import avaVlad from "../../images/avaVlad.JPG";
import avaLana from "../../images/avaLana.jpg";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                avatar: avaVit,
                followed: false,
                fullName: 'Vitaliy',
                status: 'Yep Bitches',
                location: {city: 'Saint-Petersburg', country: 'Russia'}
            },
            {
                id: 2,
                avatar: avaTim,
                followed: true,
                fullName: 'Tim',
                status: 'I\'m DECL',
                location: {city: 'Kirov', country: 'Russia'}
            },
            {
                id: 3,
                avatar: avaVlad,
                followed: true,
                fullName: 'Vlad',
                status: 'Learning React',
                location: {city: 'Yoshka', country: 'Russia'}
            },
            {
                id: 4,
                avatar: avaLana,
                followed: true,
                fullName: 'Lana',
                status: 'Watch shoes to Shein',
                location: {city: 'Saint-Petersburg', country: 'Russia'}
            }
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img className={s.ava} src={u.avatar} alt='avatar'/>
                </div>
                <div>
                    {u.followed ?
                        <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>Follow</button>
                    }
                </div>
            </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
            </div>)
        }
    </div>
}

export default Users;

