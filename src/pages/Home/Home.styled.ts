import { Spin, Pagination } from 'antd'

import styled from 'styled-components'
import tw from 'twin.macro'

export const ProductPageTitle = styled.h1`
  ${tw`font-semibold text-2xl text-yellow-700 `}
`

export const ProductPageHeaderContainer = styled.div`
  ${tw`pl-4 pr-4 flex justify-between items-center w-[100%] p-2 mt-6`}
`
export const ProductCardGridContainer = styled.div`
  ${tw`grid gap-3 grid-cols-2  md:grid-cols-3 xl:grid-cols-5 justify-items-center my-4 mx-2.5`}
`

export const StyledSpin = styled(Spin)`
  ${tw`flex justify-center items-center h-screen w-screen`}
`

export const TopProductsTitle = styled.h2`
  ${tw`text-2xl pl-3 font-semibold  text-yellow-700 `}
`

export const StyledAntdPagination = styled(Pagination)`
  ${tw`mb-4  border-b p-2 w-full text-center`}
`
