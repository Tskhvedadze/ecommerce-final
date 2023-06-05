import { useFetch } from 'hook'
import { useCallback, useEffect, useState } from 'react'

export const useHomeProducts = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 15
    const skip = (currentPage - 1) * itemsPerPage

    const { data, refetch } = useFetch({
        url: `/products?limit=${itemsPerPage}&skip=${skip}&select=title,price,images,brand,rating`,
        caching: ['homeProducts', currentPage],
    })

    useEffect(() => {
        refetch()
    }, [refetch])

    const handlePageClick = useCallback((page: number) => {
        setCurrentPage(page)
    }, [])

    return { data, handlePageClick, currentPage, itemsPerPage }
}
