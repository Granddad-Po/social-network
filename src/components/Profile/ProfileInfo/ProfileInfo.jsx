import s from './ProfileInfo.module.css';
import user from '../../../images/user.png';
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<img className={s.img}*/}
            {/*     src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>*/}
            <div className={s.about}>
                <img className={s.ava} src={props.profile.photos.large ? props.profile.photos.large : user}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div className={s.userName}>{props.profile.fullName}</div>
                <div className={s.description}>{props.profile.aboutMe}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;
