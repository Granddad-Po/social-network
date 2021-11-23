import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

	let posts = [
		{id: 1, message: 'Hi, how are you?', likesCount: 25},
		{id: 1, message: 'This is my first post', likesCount: 20}
	]

	let postsElements = posts.map( post => <Post message={post.message} likesCount={post.likesCount} /> );

	return (
		<div className={s.content}>
			<div>
				<h3>My posts</h3>
				<div className={s.newPost}>
					<textarea></textarea>
					<button>Add post</button>
				</div>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;