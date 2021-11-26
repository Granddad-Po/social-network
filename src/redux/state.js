let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 25},
            {id: 2, message: 'This is my first post', likesCount: 20}
        ]
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Vitaliy'},
            {id: 2, name: 'Tim'},
            {id: 3, name: 'Vlad'},
            {id: 4, name: 'Lana'},
            {id: 5, name: 'Arthur'},
            {id: 6, name: 'Daria'}
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you doing?'},
            {id: 3, message: 'Hello. Im fine. Thanks.'},
            {id: 4, message: 'And you?'}
        ]
    }
}

export default state;