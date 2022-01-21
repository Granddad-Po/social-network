import React from "react";
import s from "./ProfileInfo.module.css";
import {reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControl/FormsControl";

const ProfileDataForm = ({profile}) => {
    return (
        <form>
            <div>
                <button onClick={() => {}}>Save</button>
            </div>
            <div>
                <b>Full name: </b>{createField('Full name', 'fullName', Input, [])}
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
            {/*<div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div className={s.contact}><Contact key={key} contactTitle={key}
                                                           contactValue={profile.contacts[key]}/></div>
            })}
            </div>*/}
        </form>)
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataReduxForm