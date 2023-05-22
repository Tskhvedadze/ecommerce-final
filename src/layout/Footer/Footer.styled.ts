import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import tw from 'twin.macro'

export const FooterContent = styled.footer`
    ${tw`mx-auto w-full mt-9  p-4 bg-amazonclone `}
`
export const StyledGridContainer = styled.div`
    ${tw`grid grid-cols-3 items-center text-center`}
`

export const StyledLi = styled.li`
    ${tw`mb-4`}
`

export const StyledHeading = styled.h2`
    ${tw`mb-6 text-sm font-semibold text-white uppercase underline`}
`

export const StyledLink = styled(NavLink)`
    ${tw`text-white hover:underline`}
`
export const StyledLine = styled.hr`
    ${tw`my-3 border-gray-200`}
`

export const StyledFlexContainer = styled.div`
    ${tw`flex items-center justify-between mx-7`}

    span {
        ${tw`text-sm text-white`}
    }

    div {
        ${tw`flex mt-2 space-x-6 justify-center`}

        a {
            ${tw`text-white hover:text-gray-400`}

            span {
                ${tw`sr-only`}
            }
        }
    }
`
