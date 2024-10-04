import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dataExperience from '../../data/experience.json';
import ExperienceCard from '@/components/ExperienceCard/ExperienceCard';

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
		<div className={cls.categorypage}>
			<BackButton />
			<div className={cls.content}>
				<div className={cls.category_info}>
					<div className={cls.category_title}>
						<h3>Frontend developer</h3>
						<h2>{categoryData.title.ru}</h2>
					</div>
					<div className={cls.category_descr}>
						<h4>Experience</h4>
						<span>{categoryData.descr}</span>
					</div>
				</div>
				<div className={cls.expCards}>
					{data.map((item, index) => (
						<ExperienceCard key={index} type={category as string} name={item.name} />
					))}
				</div>
			</div>

			<div className={cls.gr1} />
			<div className={cls.gr2} />
		</div>
	);
};

export default CategoryPage;
