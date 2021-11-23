import s from './Post.module.css';
import ava from '../../../../images/avatar.jpg';
const Post = (props) => {
	return (
		<div className={s.item}>
			<div className={s.post}>
				<img src={ava} alt="avatar" />
				<div className={s.postMessage}>
					{props.message}
				</div>
			</div>
			<span>
				{props.likesCount} likes
			</span>
		</div>
	)
}

export default Post;