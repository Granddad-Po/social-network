import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {

	let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} /> );

	let addNewPost = (values) => {
		props.addPost(values.newPostBody);
	}

	return (
		<div className={s.content}>
			<div>
				<h3>My posts</h3>
				<div className={s.newPost}>
					<AddPostFormRedux onSubmit={addNewPost}/>
				</div>
				{postsElements}
			</div>
		</div>
	)
}

const AddPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field placeholder={'Enter your post'} name={'newPostBody'} component={'textarea'} />
			<button>Add post</button>
		</form>
	)
}

const AddPostFormRedux = reduxForm({form: 'newPostBody'})(AddPostForm)

export default MyPosts;