import axios from 'axios'

const public_axios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})

const Login = async ({
    email,
    password,
}: {
    email: string
    password: string
}) => {
    try {
        const { data } = await public_axios.post('/login', { email, password })
        return data
    } catch (error: any) {
        throw Error(error.response.data.message)
    }
}

const apiClient2 = axios.create({
    baseURL: 'https://dummyjson.com',
})

export { public_axios, apiClient2, Login }
