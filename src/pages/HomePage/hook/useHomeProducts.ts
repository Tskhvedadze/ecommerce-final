import { useQuery } from 'react-query'
import { apiClient2 } from 'utils'

export const useHomeProducts = (currentPage: number, itemsPerPage: number) => {
    return useQuery(['homePageProducts', currentPage], async () => {
        const skip = (currentPage - 1) * itemsPerPage
        const response = await apiClient2.get(
            `/products?limit=${itemsPerPage}&skip=${skip}&select=title,price,images,brand,rating`,
        )

        return response?.data
    })
}
