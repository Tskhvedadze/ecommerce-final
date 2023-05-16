import { Link } from 'react-router-dom'

import styled from 'styled-components'
import tw from 'twin.macro'

import amazon from 'assets/images/amazon.png'

export const logo = amazon

export const SNavBarLayout = styled.header`
    ${tw`min-w-[1000px]`}
`

export const SFlexLayout = styled.div`
    ${tw`flex bg-amazonclone text-white h-[60px]`}
`

export const SDivLayout = styled.div`
    ${tw`pr-4 pl-4`}
`
export const SContentLayout = styled.div`
    ${tw`flex items-center m-4`}
`

export const SImage = styled.img`
    ${tw`h-[35px] w-[100px] m-2 `}
`

export const SLink = styled(Link)`
    ${tw`text-sm xl:text-base font-bold cursor-pointer hover:text-orange-light `}
`
export const SLogoutBtn = styled.button`
    ${tw`text-sm xl:text-base font-bold cursor-pointer hover:text-orange-light `}
`

export const SUserName = styled.h1`
    ${tw`text-sm xl:text-base font-bold `}
`
export const SUserEmail = styled.h1`
    ${tw`text-xs xl:text-sm`}
`
