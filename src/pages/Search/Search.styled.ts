import styled from 'styled-components'
import tw from 'twin.macro'

export const MainFlexContainer = styled.div`
    ${tw`flex flex-col  justify-between w-[94%]`}
`
export const InnerHeaderFlexContainer = styled.div`
    ${tw`flex w-full  justify-between items-center my-4`}
`

export const SearchResultTitle = styled.h2`
    ${tw`text-gray-600 text-lg font-semibold`}
`
export const SearchResultParagraph = styled.h2`
    ${tw`text-gray-600 font-semibold`}

    span {
        ${tw`text-amber-500 ml-1.5`}
    }
`

export const SearchedProductsGridContainer = styled.div`
    ${tw`grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 my-6`}
`
