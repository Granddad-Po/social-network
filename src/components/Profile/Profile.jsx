import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {

	let posts = [
		{id: 1, message: 'Hi, how are you?', likesCount: 25},
		{id: 2, message: 'This is my first post', likesCount: 20}
	]

	return (
		<div>
			<ProfileInfo />
			<MyPosts posts={posts} />
		</div>
	)
}

export default Profile;