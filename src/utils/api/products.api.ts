import axios from 'axios'

export default axios.create({
    baseURL: 'https://dummyjson.com/products',
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        limit: 8,
        skip: 0,
        select: 'title,price,rating,brand,category,images',
    },
})
