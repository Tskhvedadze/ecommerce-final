import axios from 'axios'

export const public_axios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})
