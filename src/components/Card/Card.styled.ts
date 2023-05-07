import { HTMLAttributes } from 'react'

import styled from 'styled-components'
import tw from 'twin.macro'

type SImageDivProps = HTMLAttributes<HTMLDivElement> & {
    imageUrl: string
}

export const SCardDiv = styled.div`
    ${tw` bg-transparent z-30 m-3 `}
`

export const SCardDivBox = styled.div`
    ${tw`w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
`

export const SImageDiv = styled.div<SImageDivProps>`
    background-image: url(${({ imageUrl }) => imageUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 270px;

    ${tw`m-3 rounded`}
`

export const SContentDiv = styled.div`
    ${tw`px-5 pb-5`}
`

export const STitle = styled.h5`
    ${tw`text-xl font-semibold tracking-tight text-gray-900 dark:text-white`}
`

export const SRatingSpan = styled.span`
    ${tw`bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3`}
`

export const SPriceSpan = styled.span`
    ${tw`text-3xl font-bold text-gray-900 dark:text-white`}
`

export const SAddToCardBtn = styled.button`
    ${tw`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
`

// Flex div for Rating and Price
export const SFlexDivRating = styled.div`
    ${tw`flex items-center mt-2.5 mb-5`}
`

export const SFlexDivPrice = styled.div`
    ${tw`flex items-center justify-between`}
`
