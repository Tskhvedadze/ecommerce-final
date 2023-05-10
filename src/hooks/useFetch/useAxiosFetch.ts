import { useState } from 'react'
import API from 'utils/api/products.api'

import { FetchDataProps, ProductsProps } from 'types/productsAPI.types'

export const useAxiosFetch = <T extends ProductsProps<string | number>>(
    url: string,
) => {
    const [data, setData] = useState<FetchDataProps<T> | undefined>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const fetchData = async () => {
        setLoading(true)

        try {
            const response = await API.get<{ products: T[] }>(url)

            setData({
                products: response.data.products,
                total: response.headers['content-length'],
                limit: response.config.params.limit,
                skip: response.config.params.skip,
            })
        } catch (error: any) {
            setError(error.message)
        }
        setLoading(false)
    }

    return { data, loading, error, fetchData }
}
