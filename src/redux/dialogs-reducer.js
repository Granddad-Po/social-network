import avaVit from "../images/avatar.jpg";
import avaTim from "../images/avaTim.JPG";
import avaVlad from "../images/avaVlad.JPG";
import avaLana from "../images/avaLana.jpg";
import avaArthur from "../images/avaArthur.jpg";
import avaDaria from "../images/avaDaria.png";

const ADD_MESSAGE = 'ADD-MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-MESSAGE': {
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: action.newMessageBody}],
            };
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;
