import { ShoppingCartIcon } from '@heroicons/react/24/outline'

import styled from 'styled-components'
import tw from 'twin.macro'

export const ShoppingCartContainer = styled.div`
    ${tw`flex pr-5 pl-3 `}

    div {
        ${tw`mt-7  text-xs xl:text-sm font-bold relative`}
    }

    span {
        ${tw`absolute`}
    }
`
export const ShoppingIcon = styled(ShoppingCartIcon)`
    ${tw`h-[48px] cursor-pointer hover:text-orange-light `}
`
