import styled from 'styled-components'
import tw from 'twin.macro'

export const SCardDiv = styled.div`
    ${tw` bg-transparent z-30 m-3 flex justify-center `}
`

export const SCardDivBox = styled.div`
    ${tw`w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
`

export const SContentDiv = styled.div`
    ${tw`px-2 pb-2`}
`

export const STitle = styled.h5`
    ${tw`text-xl font-semibold tracking-tight text-gray-dark dark:text-white`}
    text-align:center
`

export const SRatingSpan = styled.span`
    ${tw`bg-yellow-light text-yellow-dark text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-dark dark:text-yellow-light ml-3`}
`

export const SPriceSpan = styled.span`
    ${tw`text-2xl font-bold text-gray-600 `}
`

export const SAddToCardBtn = styled.button`
    ${tw`text-white bg-orange hover:bg-orange-light focus:ring-4 focus:outline-none focus:ring-orange-light font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-dark dark:hover:bg-orange dark:focus:ring-orange-light`}
`

//* Flex div for Rating and Price
export const SFlexDivRating = styled.div`
    ${tw`flex items-center  `}
`

export const SFlexDivPrice = styled.div`
    ${tw`flex items-center justify-between`}
`
