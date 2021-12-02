import avaVit from '../images/avatar.jpg';
import avaTim from '../images/avaTim.JPG';
import avaVlad from '../images/avaVlad.JPG';
import avaLana from '../images/avaLana.jpg';
import avaArthur from '../images/avaArthur.jpg';
import avaDaria from '../images/avaDaria.png';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 25},
                {id: 2, message: 'This is my first post', likesCount: 20}
            ],
            newPostText: 'Vlad lox'
        },
        messagesPage: {
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
            newMessageText: 'write'
        },
        navbar: {
            friends: [
                {id: 1, name: 'Lupa', ava: avaVit},
                {id: 2, name: 'Pupa', ava: avaTim},
                {id: 3, name: 'Zalupa', ava: avaVlad}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.messagesPage.newMessageText,
            };
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});


export default store;
window.store = store;