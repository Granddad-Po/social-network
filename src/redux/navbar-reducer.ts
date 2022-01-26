const ava = 'https://cdn.pixabay.com/photo/2021/07/25/08/03/account-6491185_1280.png';

type InitialStateType = typeof initialState;
let initialState = {
    friends: [
        {id: 1, name: 'Lupa', ava: ava},
        {id: 2, name: 'Pupa', ava: ava},
        {id: 3, name: 'Zalupa', ava: ava}
    ]
};

const navbarReducer = (state = initialState, action: any): InitialStateType => { return state }

export default navbarReducer;