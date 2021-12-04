import avaVit from "../images/avatar.jpg";
import avaTim from "../images/avaTim.JPG";
import avaVlad from "../images/avaVlad.JPG";
import avaLana from "../images/avaLana.jpg";
import avaArthur from "../images/avaArthur.jpg";
import avaDaria from "../images/avaDaria.png";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Vitaliy', ava: avaVit},
        {id: 2, name: 'Tim', ava: avaTim},
        {id: 3, name: 'Vlad', ava: avaVlad},
        {id: 4, name: 'Lana', ava: avaLana},
        {id: 5, name: 'Arthur', ava: avaArthur},
        {id: 6, name: 'Daria', ava: avaDaria}
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you doing?'},
        {id: 3, message: 'Hello. Im fine. Thanks.'},
        {id: 4, message: 'And you?'}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;
