import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// 1. Время, в течение которого данные считаются «свежими» (5 минут)
			staleTime: 1000 * 60 * 5,

			// 2. Время жизни данных в кэше после того, как они стали неактивны (10 минут)
			gcTime: 1000 * 60 * 10, // В старых версиях (v4 и ниже) это свойство называлось cacheTime

			// 3. Автоматический запрос при смене фокуса вкладки
			refetchOnWindowFocus: true,

			// 4. Количество попыток перезапроса данных при ошибке сервера
			retry: 1,

			retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
		},
	},
})
