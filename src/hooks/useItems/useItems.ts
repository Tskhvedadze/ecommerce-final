import { UseQueryResult, useQuery } from 'react-query'
import { apiClient } from 'utils/api/api'
import { ProductsProps, FetchDataProps } from 'types/productsAPI.types'

export const useItems = (endpoint: string): UseQueryResult<FetchDataProps> => {
    return useQuery(['products', endpoint], () =>
        apiClient.get(endpoint).then((res) => res.data),
    )
}
