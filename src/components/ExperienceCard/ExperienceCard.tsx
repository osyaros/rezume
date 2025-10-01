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

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <article 
      className={cls.expCard} 
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`${name}: ${subText}`}
    >
      <div className={cls.expCard__img}>
        <img 
          src={`/img/experience/${type}/${name}/main.png`} 
          alt={`Изображение проекта ${name}`}
          width="300"
          height="200"
          loading="lazy"
        />
      </div>
      <div className={cls.expCard__info}>
        <h3>{name}</h3>
        <p>{subText}</p>
        <div className={cls.badges} role="list" aria-label="Технологии">
          {badgeText.length > 0 && badgeText.map((badge, index) => (
            <Badge key={index} text={badge} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
