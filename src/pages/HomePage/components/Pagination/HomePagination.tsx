import { usePagination } from 'pages/HomePage/context'

import { SPaginationContainer } from './HomePagination.styled'

export const HomePagination = () => {
    const { totalItems, itemsPerPage, setCurrentPage } = usePagination()

    const pageCount = Math.ceil(totalItems / itemsPerPage)
    const handlePageClick = (selectedItem: { selected: number }) => {
        setCurrentPage(selectedItem.selected + 1)
    }

    return (
        <>
            <SPaginationContainer
                breakLabel='...'
                nextLabel='next >'
                previousLabel='< prev'
                pageRangeDisplayed={1}
                onPageChange={handlePageClick}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageLinkClassName='page-num'
                previousLinkClassName='page-num'
                nextLinkClassName='page-num'
                activeClassName='active'
                activeLinkClassName='active'
            />
        </>
    )
}
