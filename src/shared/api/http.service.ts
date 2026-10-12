import axios from 'axios'
import { CONFIG } from '@/shared/model/config'

export const http = axios.create({
	baseURL: CONFIG.API_BASE_URL,
})
