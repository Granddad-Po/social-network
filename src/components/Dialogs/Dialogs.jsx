import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


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
	let messagesElements = messages.map( message => <Message message={message.message} /> );

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