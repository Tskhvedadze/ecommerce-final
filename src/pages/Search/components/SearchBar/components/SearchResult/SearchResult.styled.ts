import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import tw from 'twin.macro'

export const FlexContainer = styled(NavLink)`
    ${tw`text-gray-500 flex justify-between items-center px-4 py-[5.416px] border-b-[1px]  hover:bg-amazonclone-background`}
`

export const StyledImage = styled.img`
    ${tw`h-[30px] w-[30px] border-[1px] rounded border-orange-200`}
`

export const StyledTitle = styled.h1`
    ${tw`text-sm text-gray-600 `}
`
export const StyledPrice = styled.p`
    ${tw`text-sm text-green-500 font-semibold`}
`
