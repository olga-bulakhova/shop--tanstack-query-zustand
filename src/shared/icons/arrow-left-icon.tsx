interface ArrowLeftIconProps {
	className?: string
	strokeWidth?: number
}

export const ArrowLeftIcon = ({ className = 'w-4 h-4', strokeWidth = 2.5 }: ArrowLeftIconProps) => {
	return (
		<svg
			xmlns='http://w3.org'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={strokeWidth}
			stroke='currentColor'
			className={className}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
			/>
		</svg>
	)
}
