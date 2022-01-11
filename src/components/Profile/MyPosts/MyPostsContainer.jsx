import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text)),
        addPost: () => dispatch(addPostActionCreator())
    }
}*/

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;