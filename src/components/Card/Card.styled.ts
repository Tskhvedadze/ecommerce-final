import styled from 'styled-components'
import tw from 'twin.macro'

export const SCardDivBox = styled.div`
    ${tw`  w-[97%] bg-white border border-gray-200 rounded shadow-md dark:bg-gray-800 dark:border-gray-700`}
`

export const SContentDiv = styled.div`
    ${tw`pr-4 pl-4`}
`

export const STitle = styled.h5`
    ${tw`text-[1rem] font-semibold tracking-tight text-gray-dark hover:text-red-light active:text-red [display: inline-block]`}
`

export const SPriceSpan = styled.span`
    ${tw`text-[1.2rem] font-bold text-gray-600 `}
`

export const SAddToCardBtn = styled.button`
    ${tw`text-white bg-orange hover:bg-orange-light focus:ring-2 focus:outline-none focus:ring-orange-light font-medium rounded text-sm px-1.5 py-1 text-center dark:bg-orange-dark dark:hover:bg-orange dark:focus:ring-orange-light`}
`

// Flex div for Rating and Price
export const SFlexDivRating = styled.div`
    ${tw`flex items-center justify-between `}
    .go4197845992 {
        font-size: 1.5rem;
    }
`
export const SRatingSpan = styled.span`
    ${tw`bg-yellow-light text-yellow-dark text-xs font-semibold  px-2.5 py-0.5 rounded dark:bg-yellow-dark dark:text-yellow-light `}
`

export const SFlexDivPrice = styled.div`
    ${tw`flex items-center justify-between p-4`}
`
