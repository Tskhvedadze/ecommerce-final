import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
})

const apiClient2 = axios.create({
    baseURL: 'https://dummyjson.com',
})

export { apiClient, apiClient2 }
