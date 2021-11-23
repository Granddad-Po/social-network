import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className={s.content}>
			<div>
				<h3>My posts</h3>

				<div className={s.newPost}>
					<textarea></textarea>
					<button>Add post</button>
				</div>

				<Post message='Hi, how are you?' likeCount='15' />
				<Post message='This is my first post' likeCount='20' />
			</div>
		</div>
	)
}

export default MyPosts;