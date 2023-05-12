import { useContext } from 'react'
import { PaginationContext } from '../Pagination.context'

export const usePagination = () => {
    return useContext(PaginationContext)
}
