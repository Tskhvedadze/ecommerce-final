import { Link } from 'react-router-dom'

import styled from 'styled-components'
import tw from 'twin.macro'

export const FlexLayout = styled.div`
    ${tw`flex  bg-amazonclone text-white h-[4rem] min-w-[1000px] relative`}
`

export const DivLayout = styled.div`
    ${tw`px-3 `}
`

export const ContentLayout = styled.div`
    ${tw`flex items-center m-2`}
`

export const StyledUser = styled.h1`
    ${tw`text-sm xl:text-base font-bold `}
`

export const StyledLink = styled(Link)`
    ${tw`text-sm xl:text-base font-bold cursor-pointer hover:text-orange-light`}
`

export const LogoutButton = styled.button`
    ${tw`text-sm xl:text-base font-bold cursor-pointer hover:text-orange-light`}
`

export const UserName = styled.h1`
    ${tw`text-sm xl:text-base font-bold`}
`

export const UserEmail = styled.h1`
    ${tw`text-xs xl:text-sm`}
`
