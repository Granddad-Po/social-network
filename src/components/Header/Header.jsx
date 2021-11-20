import s from './Header.module.css';
import imageLogo from '../../images/logo.png';

const Header = () => {
	return (
		<header className={s.header}>
			<img className={s.img} src={imageLogo} />
		</header>
	)
}

export default Header;