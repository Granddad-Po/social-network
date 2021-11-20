import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className={s.content}>
			<div>
				My posts
				<div>
					<textarea></textarea>
					<button>Add post</button>
				</div>
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	)
}

export default MyPosts;