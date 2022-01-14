import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl";
import {required} from "../../utils/validators";
import styles from '../common/FormsControl.module.css';

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={'email'} component={Input} validate={required} />
            </div>
            <div>
                <Field type={"password"} placeholder={"Password"} name={'password'} component={Input} validate={required}/>
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={Input}/> remember me
            </div>
            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm;