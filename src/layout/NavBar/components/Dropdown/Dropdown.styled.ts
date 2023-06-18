import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledUl = styled.ul`
    ${tw`py-2 text-sm text-gray-700 dark:text-gray-200`}
`

export const StyledLink = styled(NavLink)`
    ${tw`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
`

export const SignOut = styled.span`
    ${tw`block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white`}
`

export const FlexContainer = styled.div`
    ${tw`flex justify-between  items-center `}
`

export const DropdownContainer = styled.div`
    ${tw`z-10  bg-white  top-[44px] left-[4.2%] absolute  divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600`}
`
