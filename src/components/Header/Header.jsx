import s from './Header.module.css';
import imageLogo from '../../images/logo.png';
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={s.header}>
			<img className={s.img} src={imageLogo} />
			
			<div className={s.loginBlock}>
				{ props.isAuth ? <h3>{props.login}</h3> : <NavLink to='/login'>Login</NavLink> }
			</div>
		</header>
	)
}

export default Header;