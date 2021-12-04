import avaVit from "../images/avatar.jpg";
import avaTim from "../images/avaTim.JPG";
import avaVlad from "../images/avaVlad.JPG";

let initialState = {
    friends: [
        {id: 1, name: 'Lupa', ava: avaVit},
        {id: 2, name: 'Pupa', ava: avaTim},
        {id: 3, name: 'Zalupa', ava: avaVlad}
    ]
};

const navbarReducer = (state = initialState, action) => { return state }

export default navbarReducer;