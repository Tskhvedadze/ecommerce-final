import axios from 'axios'
import { TLocalStorage } from 'types/localestorage'

export const private_axios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})

private_axios.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem(TLocalStorage.ACCESSTOKEN)

    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`
    }

    return config
})
