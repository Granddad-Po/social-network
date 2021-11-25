import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} /> );

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