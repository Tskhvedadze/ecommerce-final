import { useQuery } from 'react-query'
import { apiClient2 } from 'utils'

export const useTopProducts = () => {
    return useQuery(['topProducts'], async () => {
        const response = await apiClient2.get(
            `/products?limit=30&skip=50&select=images,brand`,
        )
        return response?.data
    })
}
