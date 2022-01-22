import React from "react";
import s from "./ProfileInfo.module.css";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControl/FormsControl";
import styles from "../../common/FormsControl/FormsControl.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
                {error && <div className={styles.formSummaryError}>
                    {error}</div>}
            </div>
            <div>
                <b>Full name: </b>{createField('Full name', 'fullName', Input, [])}
            </div>
            <div>
                <b>About me: </b>{createField('About me', 'aboutMe', Textarea, [])}
            </div>
            <div>
                <b>Looking for a job: </b>{createField('', 'lookingForAJob', Input, [], {type: 'checkbox'})}
            </div>
            <div>
                <b>Skills: </b>
                {createField('Your skills', 'lookingForAJobDescription', Textarea, [])}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: {createField(key, 'contacts.' + key, Input, [])}</b>
                </div>
            })}
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataReduxForm;