import avaVit from '../images/avatar.jpg';
import avaTim from '../images/avaTim.JPG';
import avaVlad from '../images/avaVlad.JPG';
import avaLana from '../images/avaLana.jpg';
import avaArthur from '../images/avaArthur.jpg';
import avaDaria from '../images/avaDaria.png';
import {rerenderEntireTree} from "../render";

let state = {

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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.messagesPage.newMessageText,
    };

    state.messagesPage.messages.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
    state.messagesPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export default state;