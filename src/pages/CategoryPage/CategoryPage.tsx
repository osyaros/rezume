import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dataExperience from '../../data/experience.json';
import ExperienceCard from '@/components/ExperienceCard/ExperienceCard';
import SEO from '@/components/SEO/SEO';

import cls from './CategoryPage.module.scss';
import BackButton from '../../ui/BackButton/BackButton';
interface ExperienceItem {
	name: string;
	[key: string]: any;
}

const CategoryPage: FC = () => {
	const { category } = useParams<{ category: string }>();
	const [data, setData] = useState<ExperienceItem[]>([]);
	const categoryData = dataExperience[category as keyof typeof dataExperience]
	useEffect(() => {
		setData(categoryData.data || []);
	}, [category]);

	return (
		<main className={cls.categorypage}>
			<SEO 
				title={`${categoryData.title.ru} - Ярослав Осокин | Портфолио`}
				description={categoryData.descr}
				keywords={`${categoryData.title.ru.toLowerCase()}, frontend developer, ${categoryData.title.ru.toLowerCase()}, портфолио, ярослав осокин`}
				url={`https://osokin-yaroslav.ru/${category}`}
			/>
			<BackButton />
			<div className={cls.content}>
				<header className={cls.category_info}>
					<div className={cls.category_title}>
						<h3>Frontend developer</h3>
						<h2>{categoryData.title.ru}</h2>
					</div>
					<section className={cls.category_descr}>
						<h3>Experience</h3>
						<p>{categoryData.descr}</p>
					</section>
				</header>
				<section className={cls.expCards} aria-label={`Список ${categoryData.title.ru.toLowerCase()}`}>
					{data && data.map((item, index) => (
						<ExperienceCard key={index} type={category as string} name={item.name} />
					))}
				</section>
			</div>

			<div className={cls.gr1} aria-hidden="true" />
			<div className={cls.gr2} aria-hidden="true" />
		</main>
	);
};

export default CategoryPage;
