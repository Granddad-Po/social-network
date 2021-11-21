import s from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<li><a href='/profile' className={`${s.item} ${s.active}`}>Profile</a></li>
				<li><a href='/dialogs' className={s.item}>Messages</a></li>
				<li><a className={s.item}>News</a></li>
				БдшЮБф сдфыыТфьу=ХыюшеуьЪЮЬгышсБ/фЮБ/дшЮ
				БдшЮБф сдфыыТфьу=ХыюшеуьЪЮЫуеештпыБ/фЮБ/дшЮ
			</ul>
		</nav>
	)
}

export default Navbar;