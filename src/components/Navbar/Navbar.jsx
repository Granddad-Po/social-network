import s from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<li><a className={`${s.item} ${s.active}`}>Profile</a></li>
				<li><a className={s.item}>Messages</a></li>
				<li><a className={s.item}>News</a></li>
				<li><a className={s.item}>Music</a></li>
				<li><a className={s.item}>Settings</a></li>
			</ul>
		</nav>
	)
}

export default Navbar;