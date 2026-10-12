import { Outlet, RouterProvider } from 'react-router-dom'
import { queryClient } from '@/shared/api/query-client'
import { QueryClientProvider } from '@tanstack/react-query'
import { router } from './router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<Outlet />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
