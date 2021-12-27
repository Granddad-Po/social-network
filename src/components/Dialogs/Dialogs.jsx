import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";


const Dialogs = (props) => {
	let dialogsElements = props.messagesPage.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava} /> );
	let messagesElements = props.messagesPage.messages.map( message => <Message message={message.message} /> );

	let newMessageElement = React.createRef();
	let addMessage = () => {
		props.addMessage();
	}
	let onMessageChange = () => {
		let text = newMessageElement.current.value;
		props.updateNewMessageText(text);
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
				<div>
					<textarea onChange={onMessageChange}
							  ref={newMessageElement}
							  placeholder={'Enter your message'}
							  value={props.messagesPage.newMessageText} />
					<button onClick={addMessage}>Send</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;