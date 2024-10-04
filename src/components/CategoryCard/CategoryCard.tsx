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
  return (
    <div className={cls.category} ref={ref} role='link' onClick={onClick}>
      <div className={cls.card}>
        <span className={cls.cardName}>{name}</span>
        <span className={cls.cardInfo}>{info}</span>
        <div className={cls.gr1} />
        <div className={cls.gr2} />
        <div className={cls.gr3} />
      </div>
      <div className={cls.cardFooter}>
        <span className={cls.subname}>{subname}</span>
        <button className={cls.detailsBtn} role='link'>
          Подробнее <Icon id="arrow-right" width={24} height={24} />
        </button>
      </div>
    </div>
  );
});

export default CategoryCard;
