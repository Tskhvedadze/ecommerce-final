import { Link } from 'react-router-dom'

import styled from 'styled-components'
import tw from 'twin.macro'

import amazon from 'assets/images/amazon.png'

export const logoImage = amazon

export const NavBarLayout = styled.header`
    ${tw`min-w-[1000px]`}
`

export const FlexLayout = styled.div`
    ${tw`flex bg-amazonclone text-white h-[60px]`}
`

export const DivLayout = styled.div`
    ${tw`pr-4 pl-4`}
`

export const ContentLayout = styled.div`
    ${tw`flex items-center m-4`}
`

export const LogoImage = styled.img`
    ${tw`h-[35px] w-[100px] m-2 `}
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
