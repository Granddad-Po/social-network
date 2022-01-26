/*import avaVit from "../images/avatar.jpg";
import avaTim from "../images/avaTim.JPG";
import avaVlad from "../images/avaVlad.JPG";
import avaLana from "../images/avaLana.jpg";
import avaArthur from "../images/avaArthur.jpg";
import avaDaria from "../images/avaDaria.png";*/

const ava = 'https://cdn.pixabay.com/photo/2021/07/25/08/03/account-6491185_1280.png';

const ADD_MESSAGE = 'ADD-MESSAGE';


type DialogType = {
    id: number,
    name: string,
    ava: string
}
type MessageType = {
    id: number,
    message: string,
}
export type InitialStateType = typeof initialState;
let initialState = {
    dialogs: [
        {id: 1, name: 'Vitaliy', ava: ava},
        {id: 2, name: 'Tim', ava: ava},
        {id: 3, name: 'Vlad', ava: ava},
        {id: 4, name: 'Lana', ava: ava},
        {id: 5, name: 'Arthur', ava: ava},
        {id: 6, name: 'Daria', ava: ava}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you doing?'},
        {id: 3, message: 'Hello. Im fine. Thanks.'},
        {id: 4, message: 'And you?'}
    ] as Array<MessageType>,
};

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

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

type AddMessageActionCreatorType = {
    type: typeof ADD_MESSAGE,
    newMessageBody: string
}
export const addMessageActionCreator = (newMessageBody: string): AddMessageActionCreatorType => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;
