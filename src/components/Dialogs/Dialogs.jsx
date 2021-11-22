import s from './Dialogs.module.css';

const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<div className={s.dialog + ' ' + s.active}>
					Vitaliy
				</div>
				<div className={s.dialog}>
					Tima
				</div>
				<div className={s.dialog}>
					Vlad
				</div>
				<div className={s.dialog}>
					Lana
				</div>
				<div className={s.dialog}>
					Arthur
				</div>
				<div className={s.dialog}>
					Daria
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