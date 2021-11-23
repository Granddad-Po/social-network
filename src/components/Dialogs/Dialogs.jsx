import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {

	let path = '/dialogs/' + props.id;

	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const MessageItem = (props) => {
	return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<DialogItem name='Vitaliy' id='1' />
				<DialogItem name='Tim' id='2' />
				<DialogItem name='Vlad' id='3' />
				<DialogItem name='Lana' id='4' />
				<DialogItem name='Arthur' id='5' />
				<DialogItem name='Daria' id='6' />
			</div>
			<div className={s.messages}>
				<MessageItem message='Hello' />
				<MessageItem message='How are you doing?' />
				<MessageItem message='Hello. Im fine. Thanks.' />
				<MessageItem message='And you?' />
			</div>
		</div>
	)
}

export default Dialogs;