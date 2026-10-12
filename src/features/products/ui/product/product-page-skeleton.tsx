import { Skeleton } from '@/shared/ui/kit/skeleton'

export const ProductPageSkeleton = () => {
	return (
		<>
			<Skeleton className='h-9 w-24 mb-4' />
			<Skeleton className='h-10 w-2/3 max-w-[400px] mb-7' />

			<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
				<Skeleton className='w-full h-[400px] rounded-lg' />

				<div className='p-5 rounded-[20px] bg-[#f0f4fb] flex flex-col gap-4'>
					<Skeleton className='h-10 w-32' />
					<Skeleton className='h-5 w-24' />
					<div className='space-y-2 mt-2'>
						<Skeleton className='h-4 w-full' />
						<Skeleton className='h-4 w-full' />
						<Skeleton className='h-4 w-3/4' />
					</div>
					<Skeleton className='h-11 w-full mt-5' />
				</div>
			</div>
		</>
	)
}
