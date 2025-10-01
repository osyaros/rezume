import React from 'react';
import cls from './Badge.module.scss';

type Props = {
    text: string;
    href?: string;
    effect?: boolean;
    bigBorder?: boolean;
};

const Badge: React.FC<Props> = (props) => {
    const classNames = `${cls.badge} ${props.effect ? cls.effect : ''} ${props.bigBorder ? cls.bigBorder : ''}`;
    
    return (
        props.href ? (
            <a className={classNames} href={props.href} target='_blank'>{props.text}</a>
        ) : (
            <div className={classNames}>{props.text}</div>
        )
    );
};

export default Badge;
