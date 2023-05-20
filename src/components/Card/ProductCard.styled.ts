import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import tw from 'twin.macro'

export const ProductCardContainer = styled.div`
    ${tw`w-[95%] bg-white border border-gray-200 rounded shadow-md dark:bg-gray-800 dark:border-gray-700`}
`

export const ProductCardContent = styled.div`
    ${tw`pr-4 pl-4 border-t-[1px] border-gray-300`}
`

export const ProductCardTitle = styled(NavLink)`
    ${tw`text-[1.2rem] uppercase font-semibold tracking-tight text-gray-dark hover:text-red-light hover:underline active:text-red [display: inline-block]`}
`

export const ProductCardPrice = styled.span`
    ${tw`text-[1rem] font-bold text-green-600 flex justify-center`}
    span {
        ${tw`text-green-600 mr-1 flex-row`}
    }
`

export const ProductCardPriceContainer = styled.div`
    ${tw`flex items-center justify-between p-3`}
`
