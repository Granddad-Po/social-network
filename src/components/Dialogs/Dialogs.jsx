import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

	let dialogsElements = props.data.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava} /> );
	let messagesElements = props.data.messages.map( message => <Message message={message.message} /> );

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
			</div>
		</div>
	)
}

export default Dialogs;