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
				<Post message='Hi, how are you?' likeCount='15' />
				<Post message='This is my first post' likeCount='20' />
				<Post />
			</div>
		</div>
	)
}

export default MyPosts;