import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import tw from 'twin.macro'

export const EmptyTextContainer = styled.div`
  ${tw`flex w-full h-full justify-center items-center`}
`

export const EmptyMessage = styled.h1`
  ${tw`text-3xl font-bold text-gray-500 text-center`}
`

export const SLink = styled(NavLink)`
  ${tw`text-white hover:text-gray-800 bg-yellow-700 hover:bg-yellow-800 focus:ring-1 focus:outline-none focus:ring-gray-400 rounded-lg px-2 py-1.5  dark:focus:ring-gray-400`}
`

export const TotalTitle = styled.p`
  ${tw`text-[16px]  capitalize font-semibold`}
`
export const TotalPrice = styled.p`
  ${tw`text-[16px] text-green-800`}
`

export const FooterContainer = styled.div`
  ${tw`flex w-full justify-between`}
`
