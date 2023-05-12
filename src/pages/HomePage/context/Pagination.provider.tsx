import { useState, PropsWithChildren } from 'react'
import { PaginationContext } from './Pagination.context'

export const PaginationProvider = ({ children }: PropsWithChildren) => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const itemsPerPage = 10
    const totalItems = 100
    const skip = (currentPage - 1) * itemsPerPage

    return (
        <PaginationContext.Provider
            value={{
                currentPage,
                setCurrentPage,
                itemsPerPage,
                totalItems,
                skip,
            }}
        >
            {children}
        </PaginationContext.Provider>
    )
}
