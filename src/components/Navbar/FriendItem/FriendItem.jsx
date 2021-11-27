import s from './FriendItem.module.css';


const FriendItem = (props) => {
    return (
        <div className={s.friendItem}>
            <div className={s.block}>
                <img className={s.ava} src={props.ava} alt='avatar' />
                <div className={s.name} >{props.name}</div>
            </div>
        </div>
    )
}

export default FriendItem;