import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import tw from 'twin.macro'

export const FlexContainer = styled(NavLink)`
    ${tw`text-gray-500 flex justify-between items-center px-6 pt-3 border-b-[1px] pb-2 hover:bg-amazonclone-background`}
`

export const StyledImage = styled.img`
    ${tw`h-[60px] w-[60px] border-[1px] rounded border-orange-200`}
`

export const StyledTitle = styled.h1`
    ${tw`text-xl text-gray-600 `}
`
export const StyledPrice = styled.p`
    ${tw`text-lg text-green-500 font-semibold`}
`
