import { useQuery } from 'react-query'
import { apiClient2 } from 'config/api/api'

export const useFetch = ({
    url,
    caching,
}: {
    url: string
    caching: (string | number)[]
}) => {
    return useQuery(caching, async () => {
        const res = await apiClient2.get(url)
        return res?.data
    })
}
