import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<div className={s.dialog + ' ' + s.active}>
					<NavLink to='/dialogs/1'>Vitaliy</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to='/dialogs/2'>Tim</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to='/dialogs/3'>Vlad</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to='/dialogs/4'>Lana</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to='/dialogs/5'>Arthur</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to='/dialogs/6'>Daria</NavLink>
				</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>Hello</div>
				<div className={s.message}>How are you doing?</div>
				<div className={s.message}>Hello. Im fine. Thanks.</div>
				<div className={s.message}>And you?</div>
			</div>
		</div>
	)
}

export default Dialogs;