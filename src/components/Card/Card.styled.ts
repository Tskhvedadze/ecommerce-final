import styled from 'styled-components'
import tw from 'twin.macro'

export const SCardContainer = styled.div`
    ${tw`w-[97%] bg-white border border-gray-200 rounded shadow-md dark:bg-gray-800 dark:border-gray-700`}
`

export const SCardContent = styled.div`
    ${tw`pr-4 pl-4`}
`

export const SCardTitle = styled.h5`
    ${tw`text-[1rem] font-semibold tracking-tight text-gray-dark hover:text-red-light active:text-red [display: inline-block]`}
`

export const SCardPrice = styled.span`
    ${tw`text-[1.2rem] font-bold text-gray-600 `}
`

export const SCardPriceContainer = styled.div`
    ${tw`flex items-center justify-between p-3`}
`
