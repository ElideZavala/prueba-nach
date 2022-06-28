import { useSelector, useDispatch } from 'react-redux';

const Alert = () => {
	const { alert } = useSelector(state => state);
	const dispatch = useDispatch();

	const close = () => {
		setTimeout(() => {
			dispatch({
				type: 'ALERT',
				payload: {}
			});
		 }, 3000);
	}
  
	return (
		<div>
			{alert.error && <Toast msg={{title: 'Error', body: alert.error}} bgColor="#ED2939" close={close} />}
			{alert.success && <Toast msg={{title: 'Success', body: alert.success}} bgColor="#50C878" close={close} />}
		</div>
  )
}

export default Alert