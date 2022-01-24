import s from './ProfileInfo.module.css';
import user from '../../../images/user.png';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import React, {useState} from "react";
import ProfileDataReduxForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    const onAvatarSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });
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
                {editMode
                    ? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile}
                                   isOwner={isOwner}
                                   goToEditMode={() => {setEditMode(true)}}/>
                }
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>Edit profile</button>
            </div>}
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
                <b>Skills: </b>
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
