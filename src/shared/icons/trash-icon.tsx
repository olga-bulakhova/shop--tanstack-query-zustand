import type { SVGProps } from 'react'

interface TrashIconProps extends SVGProps<SVGSVGElement> {
	size?: number
}

export const TrashIcon = ({ size = 24, ...props }: TrashIconProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://w3.org'
			{...props}
		>
			<path
				d='M4 7H20M7 7V19C7 20.1046 7.89543 21 9 21H15C16.1046 21 17 20.1046 17 19V7M10 3H14C15.1046 3 16 3.89543 16 5V7H8V5C8 3.89543 8.89543 3 10 3Z'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M10 11V16M14 11V16'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
			/>
		</svg>
	)
}
