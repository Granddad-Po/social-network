import s from './ProfileInfo.module.css';
import user from '../../../images/user.png';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    const onAvatarSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.about}>
                <img className={s.ava} src={profile.photos.large ? profile.photos.large : user}/>
                { isOwner && <input type={'file'} onChange={onAvatarSelected}/> }
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div className={s.userName}>{profile.fullName}</div>
                <div className={s.description}>{profile.aboutMe}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;
