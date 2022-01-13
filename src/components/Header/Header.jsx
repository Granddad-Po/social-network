import s from './Header.module.css';
import imageLogo from '../../images/logo.png';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <img className={s.img} src={imageLogo}/>
                <div className={s.loginBlock}>
					{props.isAuth ? <div><span>{props.login}</span>
						<button onClick={props.logout}>Log Out</button>
					</div> : <NavLink to='/login'>Login</NavLink>}
                </div>
            </div>
        </header>
    )
}

export default Header;