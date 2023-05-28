import { Spin } from 'antd'

import styled from 'styled-components'
import tw from 'twin.macro'

export const ProductPageTitle = styled.h1`
    ${tw`font-semibold text-2xl text-yellow-700 `}
`

export const ProductPageHeaderContainer = styled.div`
    ${tw`pl-4 pr-4 flex justify-between items-center w-[100%] p-2`}
`
export const ProductCardGridContainer = styled.div`
    ${tw`grid gap-8 sm:min-w-[500px] md:max-w-[100%] lg:max-w-[100%] grid-cols-2  md:grid-cols-3 xl:grid-cols-5 justify-items-center my-4 mx-2.5`}
`

export const StyledSpin = styled(Spin)`
    ${tw`flex justify-center items-center h-screen w-screen`}
`

export const TopProducts = styled.h2`
    ${tw`text-2xl pl-3 font-semibold  text-yellow-700 `}
`
