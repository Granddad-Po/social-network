import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({type: SET_USER_DATA, payload: {userId, login, email, isAuth}});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getAuthUserData = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        authAPI.me()
            .then( data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, login, email, true));
                }
            });
        dispatch(toggleIsFetching(false));
    }
}
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        authAPI.login(email, password, rememberMe)
            .then( response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                }
            });
        dispatch(toggleIsFetching(false));
    }
}
export const logout = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        authAPI.logout()
            .then( response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            });
        dispatch(toggleIsFetching(false));
    }
}


export default authReducer;