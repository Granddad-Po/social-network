import profileReducer, {addPost, deletePost} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 25},
        {id: 2, message: 'This is my first post', likesCount: 20}
    ]
};

it('length of posts should be incremented', () => {
    // 1. Test Data
    let action = addPost('Granddad Po');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
})

it('message of posts should be correct', () => {
    // 1. Test Data
    let action = addPost('Granddad Po');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[2].message).toBe('Granddad Po');
})

it('after deleting length of posts should be decrement', () => {
    // 1. Test Data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(1);
})