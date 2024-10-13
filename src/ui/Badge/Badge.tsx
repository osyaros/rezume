import React from 'react'
import cls from './Badge.module.scss'

type Props = {
    text: string
    href?: string
}

const Badge: React.FC<Props> = (props) => {
    return (
        props.href ? (
            <a className={cls.badge} href={props.href}>{props.text}</a>
        ) : (
            <div className={cls.badge}>{props.text}</div>
        )
    )
}

export default Badge
