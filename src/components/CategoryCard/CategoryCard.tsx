import React, { forwardRef } from 'react';
import { FC } from 'react';

import cls from './CategoryCard.module.scss';
import Icon from '../../ui/Icon/Icon';

interface CategoryCardProps {
    subname: string;
    name: string;
    info: string;
    onClick: () => void;
}

const CategoryCard = forwardRef<HTMLDivElement, CategoryCardProps>(({ subname, name, info, onClick}, ref) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <article 
      className={cls.category} 
      ref={ref} 
      role='button'
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={`${name}: ${info}`}
    >
      <div className={cls.card}>
        <h3 className={cls.cardName}>{name}</h3>
        <p className={cls.cardInfo}>{info}</p>
        <div className={cls.gr1} aria-hidden="true" />
        <div className={cls.gr2} aria-hidden="true" />
        <div className={cls.gr3} aria-hidden="true" />
      </div>
      <div className={cls.cardFooter}>
        <span className={cls.subname}>{subname}</span>
        <button 
          className={cls.detailsBtn} 
          aria-label={`Подробнее о ${name}`}
          type="button"
        >
          Подробнее <Icon id="arrowRight" width={24} height={24} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
});

export default CategoryCard;
