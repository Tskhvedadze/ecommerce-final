import ReactPaginate from 'react-paginate'

import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledPaginationContainer = styled(ReactPaginate)`
    ${tw`list-none flex justify-center items-center mb-8 mt-12 text-lg gap-3  `}
    line-height:0;

    .page-num {
        ${tw`px-2 py-1 cursor-pointer rounded-lg font-normal border`}
    }

    .page-num:hover {
        ${tw`bg-yellow-dark text-white`}
    }

    .active {
        ${tw`bg-yellow-dark text-white`}
    }
`
