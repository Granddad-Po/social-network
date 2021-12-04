import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

	let postsElements = props.profilePage.posts.map( post => <Post message={post.message} likesCount={post.likesCount} /> );

	let newPostElement = React.createRef();
	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch(updateNewPostTextActionCreator(text));
	}

	return (
		<div className={s.content}>
			<div>
				<h3>My posts</h3>
				<div className={s.newPost}>
					<textarea onChange={ onPostChange } ref={newPostElement} placeholder={'Enter your post'} value={props.profilePage.newPostText} />
					<button onClick={ addPost }>Add post</button>
				</div>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;