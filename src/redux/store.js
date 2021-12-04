import avaVit from '../images/avatar.jpg';
import avaTim from '../images/avaTim.JPG';
import avaVlad from '../images/avaVlad.JPG';
import avaLana from '../images/avaLana.jpg';
import avaArthur from '../images/avaArthur.jpg';
import avaDaria from '../images/avaDaria.png';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 25},
                {id: 2, message: 'This is my first post', likesCount: 20}
            ],
            newPostText: ''
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
            newMessageText: ''
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;