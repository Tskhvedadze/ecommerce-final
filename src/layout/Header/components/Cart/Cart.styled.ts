import { ShoppingCartIcon } from '@heroicons/react/24/outline'

import styled from 'styled-components'
import tw from 'twin.macro'

export const SCartContainer = styled.div`
    ${tw`flex pr-3 pl-3`}

    div {
        ${tw`mt-7  text-xs xl:text-sm font-bold`}
    }

    span {
        ${tw`ml-1`}
    }
`
export const SCartIcon = styled(ShoppingCartIcon)`
    ${tw`h-[48px] cursor-pointer hover:text-orange-light`}
`
