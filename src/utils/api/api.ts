import axios from 'axios'
import { QueryClient } from 'react-query'

export default axios.create({
    baseURL: 'https://dummyjson.com/products',
    headers: {
        'Content-Type': 'application/json',
    },
})

const apiClient = axios.create({
    baseURL: 'https://dummyjson.com/',
})

const queryClient = new QueryClient()

export { apiClient, queryClient }
