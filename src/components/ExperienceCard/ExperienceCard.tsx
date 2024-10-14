import { FC, useEffect, useState } from 'react';
import dataExperience from '../../data/experience.json';
import cls from './ExperienceCard.module.scss';
import Badge from '../../ui/Badge/Badge';
import { useNavigate } from 'react-router-dom';

interface ExperienceCardProps {
  type: string;
  name: string;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ type, name }) => {
  const [subText, setSubText] = useState('');
  const [badgeText, setBadgeText] = useState<string[]>([]); 
  const navigate = useNavigate();
  const [handleClick, setHandleClick] = useState<() => void>(() => {});

  useEffect(() => {
    let text = '';
    let badges: string[] = [];
    let clickHandler = () => {};

    if (type === 'hackathons') {
      const hackItem = dataExperience.hackathons.data.find((item) => item.name === name);
      if (hackItem) {
        text = `${hackItem.place} место · ${hackItem.teamName} · ${hackItem.time}`;
        badges = [hackItem.case];
        clickHandler = () => navigate(`/hackathons/${encodeURIComponent(name)}`);
      }
    } else if (type === 'workplaces') {
      const workItem = dataExperience.workplaces.data.find((item) => item.name === name);
      if (workItem) {
        text = `${workItem.position || ''} · ${workItem.time || ''}`;
        badges = workItem.stack || []; 
        clickHandler = () => navigate(`/workplaces/${encodeURIComponent(name)}`);
      }
    } else if (type === 'projects') {
      const projectItem = dataExperience.projects.data.find((item) => item.name === name);
      if (projectItem) {
        text = projectItem.position || '';
        clickHandler = () => navigate(`/projects/${encodeURIComponent(name)}`);
      }
    }

    setHandleClick(() => clickHandler);
    setSubText(text);
    setBadgeText(badges); 
  }, [type, name, navigate]);

  return (
    <article className={cls.expCard} onClick={handleClick}>
      <div className={cls.expCard__img}>
        <img src={`${process.env.PUBLIC_URL}/img/experience/${type}/${name}/main.png`} alt={`${name} image`} />
      </div>
      <div className={cls.expCard__info}>
        <h3>{name}</h3>
        <span>{subText}</span>
        <div className={cls.badges}>
          {badgeText.length > 0 && badgeText.map((badge, index) => (
            <Badge key={index} text={badge} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
