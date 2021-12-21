import s from './ProfileInfo.module.css';
import ava from '../../../images/avatar.jpg';

const ProfileInfo = (props) => {
	return (
		<div>
			<img className={s.img} src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
			<div className={s.aboutMe}>
				<img className={s.ava} src={props.profile.photos.large} alt="avatar" />
				<div className={s.description}>Hi, I start youself way of React samurai. Let's go!</div>
			</div>
		</div>
	)
}

export default ProfileInfo;