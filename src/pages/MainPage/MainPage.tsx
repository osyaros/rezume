import { FC, useRef } from 'react';
import cls from './MainPage.module.scss';
import NavBar from '@/components/NavBar/NavBar';
import CategoryCard from '@/components/CategoryCard/CategoryCard';
import SEO from '@/components/SEO/SEO';
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
		<main className={cls.mainpage} role="main">
			<SEO 
				title="Ярослав Осокин - Frontend Developer | Портфолио"
				description="Frontend разработчик с опытом работы в React, Vue. Участник хакатонов, призер IT-соревнований. Специализируюсь на создании современных веб-приложений."
				keywords="frontend developer, react, vue, javascript, typescript, портфолио, разработчик, веб-разработка, хакатоны"
			/>
			<aside role="complementary" aria-label="Информация о разработчике">
				<article className={cls.person}>
					<img 
						src="/img/mainpage/person.png" 
						className={cls.person__img}
						alt="Фотография Ярослава Осокина"
						width="200"
						height="200"
					/>
					<h1 className={cls.name}>
						Ярослав <br />
						Осокин
					</h1>
					<h2>Frontend developer</h2>
				</article>
				<NavBar
					scrollToProjects={() => scrollToRef(projectsRef)}
					scrollToWorkPlaces={() => scrollToRef(workPlacesRef)}
					scrollToHackathons={() => scrollToRef(hackathonsRef)}
					scrollToTools={() => scrollToRef(toolsRef)}
				/>
				<section className={cls.contacts} aria-label="Контактная информация">
					<h3>Контакты</h3>
					<a href="https://t.me/osyaros" aria-label="Telegram: @osyaros">
						<h3>@osyaros</h3>
					</a>
					<p>
						<a href="mailto:yaros.osokin@yandex.ru" aria-label="Email: yaros.osokin@yandex.ru">
							yaros.osokin@yandex.ru
						</a>
					</p>
				</section>
			</aside>
			<section className={cls.categoryCards} aria-label="Портфолио">
				{/* <CategoryCard name="Проекты" subname="Мои проекты" info="Мои разработки 2023-2024" ref={projectsRef} onClick={() => navigate('/projects')} /> */}
				<CategoryCard 
					name="Места работы" 
					subname="Места работы" 
					info="Команды, в которых работал 2023-2024" 
					ref={workPlacesRef} 
					onClick={() => navigate('/workplaces')} 
				/>
				<CategoryCard 
					name="Хакатоны" 
					subname="Хакатоны" 
					info="Призовые на IT соревнованиях 2023-2024" 
					ref={hackathonsRef} 
					onClick={() => navigate('/hackathons')} 
				/>
				<CategoryCard 
					name="Инструменты" 
					subname="Инструменты" 
					info="Frameworks, Libraries" 
					ref={toolsRef} 
					onClick={() => navigate('/tools')} 
				/>
			</section>
		</main>
	);
};
