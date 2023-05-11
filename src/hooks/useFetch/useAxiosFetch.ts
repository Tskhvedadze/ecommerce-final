import { useState } from 'react'
import API from 'utils/api/products.api'

import { FetchDataProps } from 'types/productsAPI.types'

type UseAxiosFetchProps = {
    endPoint: string
}

export const useAxiosFetch = ({ endPoint }: UseAxiosFetchProps) => {
    const [data, setData] = useState<FetchDataProps | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const fetchData = async (): Promise<void> => {
        setLoading(true)
        try {
            const response = await API.get(endPoint)
            setData(response?.data)
        } catch (error: any) {
            setError(error.message)
        }
        setLoading(false)
    }

    return { data, loading, error, fetchData }
}
