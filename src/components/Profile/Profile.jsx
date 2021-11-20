import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return (
		<div className={s.content}>
			<img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
			<div>
				avatar + description
			</div>
			<MyPosts />
		</div>
	)
}

export default Profile;