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
        <div className={s.about}>
            <img className={s.ava} src={profile.photos.large ? profile.photos.large : user}/>
            <div>
                {isOwner && <input type={'file'} onChange={onAvatarSelected}/>}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                { editMode ? <ProfileDataForm profile={profile}/> : <ProfileData profile={profile}/> }
            </div>
        </div>
    )
}

const ProfileData = ({profile}) => {
    return (
        <div>
            <div>
                <b>Full name: </b>{profile.fullName}
            </div>
            <div>
                <b>About me: </b>{profile.aboutMe}
            </div>
            <div>
                <b>Looking for a job: </b>{profile.lookingForAJob ? 'Уже работаю' : 'В поиске работы'}
            </div>
            <div>
                {profile.lookingForAJob && profile.lookingForAJobDescription}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div className={s.contact}><Contact key={key} contactTitle={key}
                                                           contactValue={profile.contacts[key]}/></div>
            })}
            </div>
        </div>
    )
}
const ProfileDataForm = ({profile}) => {
    return (
        <div>
            <div>
                <b>Full name: </b>{profile.fullName}
            </div>
            <div>
                <b>About me: </b>{profile.aboutMe}
            </div>
            <div>
                <b>Looking for a job: </b>{profile.lookingForAJob ? 'Уже работаю' : 'В поиске работы'}
            </div>
            <div>
                {profile.lookingForAJob && profile.lookingForAJobDescription}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div className={s.contact}><Contact key={key} contactTitle={key}
                                                           contactValue={profile.contacts[key]}/></div>
            })}
            </div>
        </div>
    )
}
const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}: </b>{contactValue}</div>
}

export default ProfileInfo;
