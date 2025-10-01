import { FC, useEffect, useState, Fragment} from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../../ui/BackButton/BackButton';
import SEO from '@/components/SEO/SEO';
import cls from './DetailPage.module.scss';
import data from '../../data/experience.json';
import Badge from '@/ui/Badge/Badge';
const DetailPage: FC = () => {
	const { category, name } = useParams<{ category: string; name: string }>();

	const decodedCategory = decodeURIComponent(category || '');
	const decodedName = decodeURIComponent(name || '');
	const experience = data[decodedCategory as keyof typeof data].data.find((item) => item.name === decodedName);
	const [subText, setSubText] = useState('');
	const [nameTheme, setNameTheme] = useState('');
	const [themeDescr, setThemeDescr] = useState('');
	const [badges, setBadges] = useState<string[]>([]);
	const [repo, setRepo] = useState('');
	const [link, setLink] = useState('');
	console.log(decodedCategory);

	useEffect(() => {
		let text = '';
		let nameTheme = '';
		let themeDescr = '';
		let repo = '';
		let stack: string[] = [];
		let link = '';
		if (experience) {
			if (decodedCategory === 'hackathons' && 'place' in experience && 'caseDescr' in experience && 'repository' in experience) {
				text = `${experience.place} место · ${experience.teamName} · ${experience.time}`;
				nameTheme = 'Кейс';
				themeDescr = experience.caseDescr;
				repo = experience.repository;
				stack = experience.stack;
			} else if (decodedCategory === 'workplaces' && 'position' in experience && 'company_descr' in experience) {
				text = experience.time || '';
				nameTheme = 'О компании';
				themeDescr = experience.company_descr;
				stack = experience.stack;
				link = experience.url || '';
			} else if (decodedCategory === 'projects' && 'position' in experience) {
				text = experience.position || '';
				nameTheme = 'О проекте';
				stack = experience.stack;
			}
		}
		setThemeDescr(themeDescr);
		setNameTheme(nameTheme);
		setSubText(text);
		setRepo(repo);
		setBadges(stack);
		setLink(link);
	}, [decodedCategory, name, experience, decodedName, decodedCategory]);
	return (
		<main className={cls.detailpage}>
			<SEO 
				title={`${decodedName} - Ярослав Осокин | Портфолио`}
				description={experience?.solveDescr?.substring(0, 160) || `Подробная информация о проекте ${decodedName}`}
				keywords={`${decodedName}, ${decodedCategory}, frontend developer, портфолио, ярослав осокин, ${badges.join(', ')}`}
				url={`https://osokin-yaroslav.ru/${category}/${name}`}
				image={`https://osokin-yaroslav.ru/img/experience/${decodedCategory}/${decodedName}/main.png`}
			/>
			<BackButton />
			<article className={cls.experience}>
				<header className={cls.photoCaption}>
					<h1 className={cls.caption}>{subText}</h1>
					<div className={cls.expCard__img}>
						<img 
							src={`/img/experience/${decodedCategory}/${decodedName}/main.png`} 
							alt={`Главное изображение проекта ${decodedName}`}
							width="600"
							height="400"
							loading="eager"
						/>
					</div>
				</header>
				<section className={cls.info}>
					<h2 className={cls.title}>{experience?.name}</h2>
					<div className={cls.theme}>
						<h3 className={cls.nameTheme}>{nameTheme}</h3>
						<p className={cls.themeText}>{themeDescr}</p>
					</div>
				</section>
				<section className={cls.description}>
					<h3 className={cls.title}>Опыт</h3>
					<div className={cls.badges} role="list" aria-label="Использованные технологии">
						{badges.length > 0 && badges.map((badge, index) => <Badge bigBorder key={index} text={badge} />)}
					</div>
					<div className={cls.text}>
						{experience?.solveDescr.split('\n').map((line, index) => (
							<Fragment key={index}>
								{line}
								<br />
							</Fragment>
						))}
					</div>
					<img 
						src={`/img/experience/${decodedCategory}/${decodedName}/sub.png`} 
						className={cls.subPhoto}
						alt={`Дополнительное изображение проекта ${decodedName}`}
						width="400"
						height="300"
						loading="lazy"
					/>
					{repo && <Badge text="Repository" href={repo} effect bigBorder />}
					{link && <Badge text="Link to site" href={link} effect bigBorder />}
					<div className={cls.backgr} aria-hidden="true" />
				</section>
			</article>

			<div className={cls.gr1} aria-hidden="true" />
			<div className={cls.gr2} aria-hidden="true" />
			<div className={cls.gr3} aria-hidden="true" />
		</main>
	);
};

export default DetailPage;
