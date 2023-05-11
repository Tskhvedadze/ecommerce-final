import { Pagination } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

type HomePaginationProps = {
    quotesPerPage: number
    totalQuotes: number
    currentPage: number
    setCurrentPage: (page: number) => void
}

export const HomePagination = ({
    quotesPerPage,
    totalQuotes,
    currentPage,
    setCurrentPage,
}: HomePaginationProps): JSX.Element => {
    let pageNumbers = []

    for (let page = 1; page <= Math.ceil(totalQuotes / quotesPerPage); page++) {
        pageNumbers.push(
            <Pagination.Item
                key={page}
                active={page === currentPage}
                onClick={() => setCurrentPage(page)}
            >
                {page}
            </Pagination.Item>,
        )
    }

    console.log()

    return (
        <Pagination
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '10px',
            }}
        >
            {pageNumbers}
        </Pagination>
    )
}
