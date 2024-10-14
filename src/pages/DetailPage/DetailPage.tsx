import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../../ui/BackButton/BackButton';
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
	console.log(decodedCategory);
    
	useEffect(() => {
		let text = '';
		let nameTheme = '';
		let themeDescr = '';
		let repo = '';
		let stack: string[] = [];
		if (experience) {
			if (decodedCategory === 'hackathons' && 'place' in experience && 'caseDescr' in experience && 'repository' in experience) {
				text = `${experience.place} место · ${experience.teamName} · ${experience.time}`;
				nameTheme = 'Кейс';
				themeDescr = experience.caseDescr;
				repo = experience.repository;
                stack =experience.stack;
                
			} else if (decodedCategory === 'workplaces' && 'position' in experience && 'company_descr' in experience) {
				text = experience.time || '';
				nameTheme = 'О компании';
				themeDescr = experience.company_descr;
				stack =experience.stack;
			} else if (decodedCategory === 'projects' && 'position' in experience) {
				text = experience.position || '';
				nameTheme = 'О проекте';
				stack =experience.stack;
			}
		}
		setThemeDescr(themeDescr);
		setNameTheme(nameTheme);
		setSubText(text);
		setRepo(repo);
		setBadges(stack);
	}, [decodedCategory, name, experience, decodedName, decodedCategory]);
	return (
		<div className={cls.detailpage}>
			<BackButton />
			<div className={cls.experience}>
				<div className={cls.photoCaption}>
					<h4 className={cls.caption}>{subText}</h4>
					<div className={cls.expCard__img}>
						<img src={`/img/experience/${decodedCategory}/${decodedName}/main.png`} alt={`${decodedName} image`} />
					</div>
				</div>
				<div className={cls.info}>
					<h2 className={cls.title}>{experience?.name}</h2>
					<div className={cls.theme}>
						<h4 className={cls.nameTheme}>{nameTheme}</h4>
						<p className={cls.themeText}>{themeDescr}</p>
					</div>
				</div>
				<div className={cls.description}>
					<h3 className={cls.title}>Опыт</h3>
					<div className={cls.badges}>{badges.length > 0 && badges.map((badge, index) => <Badge bigBorder key={index} text={badge} />)}</div>
					<p className={cls.text}>{experience?.solveDescr}</p>
					{repo && <Badge text="Repository" href={repo} effect bigBorder/>}
                    <img src={`/img/experience/${decodedCategory}/${decodedName}/sub.png`} className={cls.subPhoto} />
				</div>
			</div>

			<div className={cls.gr1} />
			<div className={cls.gr2} />
            <div className={cls.gr3} />
		</div>
	);
};

export default DetailPage;
