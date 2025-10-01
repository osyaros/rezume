import { FC } from 'react';

import cls from './BackButton.module.scss';
import Icon from '../Icon/Icon.tsx';
import { useNavigate } from 'react-router-dom';

const BackButton: FC = () => {
	const navigate = useNavigate();
	
	const handleClick = () => {
		navigate(-1);
		console.log('click');
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		// Предотвращаем двойное срабатывание на мобильных устройствах
		e.preventDefault();
	};

	const handleTouchEnd = (e: React.TouchEvent) => {
		e.preventDefault();
		handleClick();
	};

	return (
		<button
			className={cls.backBtn}
			onClick={handleClick}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
			role="link"
			type="button"
		>
			<Icon id="arrowLeft" width={45} height={45} />
		</button>
	);
};

export default BackButton;
