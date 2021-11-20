import s from './Post.module.css';

const Post = () => {
	return (
		<div className={s.item}>
			<img src="https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/445x460_0_6a5d57baf3fab914fdfcc2cc563ed893@480x496_0xac120003_4430520541578509619.jpg" alt="avatar" />
			post 1
			<div>
				<span>
					like
				</span>
			</div>
		</div>
	)
}

export default Post;