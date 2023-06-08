import axios from 'axios'

const apiClient2 = axios.create({
    baseURL: 'https://dummyjson.com',
})

export { apiClient2 }
