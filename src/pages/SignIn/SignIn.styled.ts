import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledSection = styled.section`
    ${tw`bg-gray-50 dark:bg-gray-900 w-full`}
`
export const FlexContainer = styled.div`
    ${tw`flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen`}
`

export const ContentDiv = styled.div`
    ${tw`w-full bg-white rounded-lg shadow dark:border  sm:max-w-md  dark:bg-gray-800 dark:border-gray-700`}
`

export const InnerDiv = styled.div`
    ${tw`p-6 space-y-4 md:space-y-6 sm:p-8`}
`

export const StyledTitle = styled.h1`
    ${tw`text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white`}
`

export const FooterContainer = styled.div`
    ${tw`flex justify-between w-full`}
`

export const StyledParagraph = styled.p`
    ${tw`text-sm font-light text-gray-500 dark:text-gray-400 `}
`

export const StyledNavLink = styled(NavLink)`
    ${tw`font-medium  text-login-600 hover:underline dark:text-login-500`}
`
