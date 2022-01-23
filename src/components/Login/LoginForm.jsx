import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators";
import styles from '../common/FormsControl/FormsControl.module.css';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {

    return (
        <form onSubmit={handleSubmit}>

            {createField('Email', 'email', Input, [required])}
            {createField('Password', 'password', Input, [required], {type: 'password'})}
            {createField(null, 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me')}

            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            {captchaUrl && <div>
                <img src={captchaUrl}/>
                {createField('Captcha', 'captcha', Input, [required])}
            </div>}
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;