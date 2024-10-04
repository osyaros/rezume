import { FC } from 'react'

interface IconProps {
	className?: string
	id: string
	width: number
	height: number
}

const Icon: FC<IconProps> = ({ className, id, width, height }) => {
	return (
		<svg className={className} width={width} height={height}>
			<use href={`img/icons.svg#${id}`} xlinkHref={`/icons.svg#${id}`} />
		</svg>
	)
}

export default Icon
