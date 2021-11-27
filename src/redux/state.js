import avaVit from '../images/avatar.jpg';
import avaTim from '../images/avaTim.JPG';
import avaVlad from '../images/avaVlad.JPG';
import avaLana from '../images/avaLana.jpg';
import avaArthur from '../images/avaArthur.jpg';
import avaDaria from '../images/avaDaria.png';

let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 25},
            {id: 2, message: 'This is my first post', likesCount: 20}
        ]
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
        ]
    },
    navbar: {
        friends: [
            {id: 1, name: 'Lupa', ava: avaVit},
            {id: 2, name: 'Pupa', ava: avaTim},
            {id: 3, name: 'Zalupa', ava: avaVlad}
        ]
    }
}

export default state;