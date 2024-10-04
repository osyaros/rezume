import React from 'react'
import cls from './Badge.module.scss'
type Props = {
    text:string
}

const Badge = (props: Props) => {
  return (
    <div className={cls.badge}>{props.text}</div>
  )
}

export default Badge