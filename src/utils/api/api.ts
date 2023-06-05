import axios from 'axios'
import { QueryClient } from 'react-query'

const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
})

const apiClient2 = axios.create({
    baseURL: 'https://dummyjson.com',
})

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
            refetchOnWindowFocus: false,
            staleTime: 60000,
            retry: false,
        },
    },
})

export { apiClient, queryClient, apiClient2 }
