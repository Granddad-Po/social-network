import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {
    let dialogsElements = props.messagesPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                               ava={dialog.ava}/>);
    let messagesElements = props.messagesPage.messages.map(message => <Message message={message.message}/>);

	let addNewMessage = (values) => {
		props.addMessage(values.newMessageBody);
	}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
					<AddMessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Enter your message'} name={'newMessageBody'} component={'textarea'}/>
            <button>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'newMessageBody'})(AddMessageForm);

export default Dialogs;