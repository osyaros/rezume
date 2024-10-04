import { FC, useRef } from 'react';
import cls from './MainPage.module.scss';
import NavBar from '@/components/NavBar/NavBar';
import CategoryCard from '@/components/CategoryCard/CategoryCard';
import { useNavigate } from 'react-router-dom';

export const MainPage: FC = () => {
	const projectsRef = useRef<HTMLDivElement>(null);
	const workPlacesRef = useRef<HTMLDivElement>(null);
	const hackathonsRef = useRef<HTMLDivElement>(null);
	const toolsRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();
	const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
		ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};
	
	return (
		<div className={cls.mainpage}>
			<aside>
				<article className={cls.person}>
					<img src="/img/mainpage/person.png" className={cls.person__img} />
					<span className={cls.name}>
						Ярослав <br />
						Осокин
					</span>
					<h4>Frontend разработчик</h4>
				</article>
				<NavBar
					scrollToProjects={() => scrollToRef(projectsRef)}
					scrollToWorkPlaces={() => scrollToRef(workPlacesRef)}
					scrollToHackathons={() => scrollToRef(hackathonsRef)}
					scrollToTools={() => scrollToRef(toolsRef)}
				/>
				<div className={cls.contacts}>
					<span>
						<h3>Контакты</h3>
					</span>
					<a href="https://t.me/osyarik">
						<h3>@osyarik</h3>
					</a>
					<p>
						<a href="mailto:osyaros.2005@yandex.ru">osyaros.2005@yandex.ru</a>
					</p>
				</div>
			</aside>
			<div className={cls.categoryCards}>
				<CategoryCard name="Проекты" subname="Мои проекты" info="Мои разработки 2023-2024" ref={projectsRef} onClick={() => navigate('/projects')} />
				<CategoryCard name="Места работы" subname="Места работы" info="Команды, в которых работал 2023-2024" ref={workPlacesRef} onClick={() => navigate('/workplaces')} />
				<CategoryCard name="Хакатоны" subname="Хакатоны" info="Призовые на IT соревнованиях 2023-2024" ref={hackathonsRef} onClick={() => navigate('/hackathons')} />
				<CategoryCard name="Инструменты" subname="Инструменты" info="Frameworks, Libraries" ref={toolsRef} onClick={() => navigate('/tools')} />
			</div>
		</div>
	);
};
