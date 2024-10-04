import { FC, useState } from 'react';
import cls from './NavBar.module.scss';

interface NavBarProps {
	scrollToProjects: () => void;
	scrollToWorkPlaces: () => void;
	scrollToHackathons: () => void;
	scrollToTools: () => void;
}

const NavBar: FC<NavBarProps> = ({
	scrollToProjects,
	scrollToWorkPlaces,
	scrollToHackathons,
	scrollToTools
}) => {
	const [activeItem, setActiveItem] = useState<string>('Проекты');

	const handleItemClick = (item: string, scrollFunction: () => void) => {
		setActiveItem(item);
		scrollFunction();
	};

	return (
		<nav className={cls.navbar}>
			<ol>
				<li
					onClick={() => handleItemClick('Проекты', scrollToProjects)}
					className={activeItem === 'Проекты' ? cls.active : ''}
				>
					Проекты
				</li>
				<li
					onClick={() =>
						handleItemClick('Места работы', scrollToWorkPlaces)
					}
					className={activeItem === 'Места работы' ? cls.active : ''}
				>
					Места работы
				</li>
				<li
					onClick={() =>
						handleItemClick('Хакатоны', scrollToHackathons)
					}
					className={activeItem === 'Хакатоны' ? cls.active : ''}
				>
					Хакатоны
				</li>
				<li
					onClick={() =>
						handleItemClick('Инструменты', scrollToTools)
					}
					className={activeItem === 'Инструменты' ? cls.active : ''}
				>
					Инструменты
				</li>
			</ol>
		</nav>
	);
};

export default NavBar;
