import { StyledPaginationContainer } from './Pagination.styled'

type PaginationContextProps = {
    setCurrentPage: (page: number) => void
    itemsPerPage: number
    totalItems: number
}

export const Pagination = ({
    setCurrentPage,
    itemsPerPage,
    totalItems,
}: PaginationContextProps) => {
    const pageCount = Math.ceil(totalItems / itemsPerPage)
    const handlePageClick = (selectedItem: { selected: number }) => {
        setCurrentPage(selectedItem.selected + 1)
    }

    return (
        <>
            <StyledPaginationContainer
                breakLabel='...'
                nextLabel='Next >'
                previousLabel='< Prev'
                pageRangeDisplayed={1}
                onPageChange={handlePageClick}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageLinkClassName='page-num'
                previousLinkClassName='page-num'
                nextLinkClassName='page-num'
                activeLinkClassName='active'
            />
        </>
    )
}
