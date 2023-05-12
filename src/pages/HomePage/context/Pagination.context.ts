import { createContext } from 'react'

type PaginationContextProps = {
    currentPage: number
    setCurrentPage: (page: number) => void
    itemsPerPage: number
    totalItems: number
    skip: number
}

export const PaginationContext = createContext({} as PaginationContextProps)
