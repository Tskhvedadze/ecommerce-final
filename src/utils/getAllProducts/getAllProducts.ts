import { apiClient } from 'utils'

export const getAllProducts = async (
    itemsPerPage?: number,
    page_number?: number,
    keyword?: string,
) => {
    const response = await apiClient.post('/products', {
        keyword: keyword,
        page_size: itemsPerPage,
        page_number: page_number,
    })
    return response.data
}
