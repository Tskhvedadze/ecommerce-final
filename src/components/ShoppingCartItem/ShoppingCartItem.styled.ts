import styled from 'styled-components'
import tw from 'twin.macro'

export const CartItemContainer = styled.div`
    ${tw`flex justify-between border-b border-gray-400 pb-1 mb-2`}
`

export const TotalQuantityContainer = styled.div`
    ${tw`flex flex-col items-center justify-center pr-2 text-[14px]`}

    p {
        ${tw`text-green-800 `}
    }
`
