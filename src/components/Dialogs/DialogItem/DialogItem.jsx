import s from './DialogItem.module.css';
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {

	let path = '/dialogs/' + props.id;

	return (
		<div className={s.dialogsItem}>
			<img className={s.avatar} src={props.ava} alt='avatar'/>
			<NavLink className={dialogsData => dialogsData.isActive ? s.active : s.dialogs}
					 to={path}>{props.name}</NavLink>
		</div>
	)
}

export default DialogItem;