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

	let dialogs = [
		{id: 1, name: 'Vitaliy'},
		{id: 2, name: 'Tim'},
		{id: 3, name: 'Vlad'},
		{id: 4, name: 'Lana'},
		{id: 5, name: 'Arthur'},
		{id: 6, name: 'Daria'}
	]

	let messages = [
		{id: 1, message: 'Hello'},
		{id: 2, message: 'How are you doing?'},
		{id: 3, message: 'Hello. Im fine. Thanks.'},
		{id: 4, message: 'And you?'}
	]

	let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
	let messagesElements = messages.map( message => <MessageItem message={message.message} /> );

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
			</div>
		</div>
	)
}

export default Dialogs;