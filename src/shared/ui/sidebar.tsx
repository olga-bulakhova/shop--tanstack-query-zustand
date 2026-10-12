import { useState } from 'react'
import { Logo } from './logo'
import { Button } from './kit/button'

export const Sidebar = ({ children }: { children?: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleSidebar = () => setIsOpen(!isOpen)
	const closeSidebar = () => setIsOpen(false)

	return (
		<>
			<Button
				variant='round'
				onClick={toggleSidebar}
				className='fixed top-[15px] left-[15px] z-[110] w-11 h-11 lg:hidden'
			>
				<span className='text-[#727280]'>{isOpen ? '✕' : '☰'}</span>
			</Button>

			{isOpen && (
				<div
					className='fixed inset-0 z-[90] bg-black/40 lg:hidden animate-fade-in'
					onClick={closeSidebar}
				/>
			)}

			{/* Панель сайдбара */}
			<aside
				className={`
					/* Базовые десктопные стили */
					w-full min-h-screen pl-4 pt-4 transition-transform duration-300 ease-in-out
					lg:border-l lg:border-[#F0F4Fb]
					
					/* Мобильные стили (экраны < 1024px) */
					max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:bottom-0 max-lg:z-[100] max-lg:w-[300px] max-lg:h-screen 
					max-lg:bg-white max-lg:shadow-none
					
					/* Управление открытием/закрытием на мобилке */
					${isOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'}
				`}
			>
				<div className='pl-14 mb-4 lg:hidden'>
					<Logo />
				</div>

				{children}
			</aside>
		</>
	)
}
