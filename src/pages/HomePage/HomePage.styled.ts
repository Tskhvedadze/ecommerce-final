import styled from 'styled-components'
import tw from 'twin.macro'

export const SProductsContainer = styled.div`
    ${tw`pl-4 pr-4 flex justify-between items-center w-[100%] p-2`}
`

export const SHomeTitle = styled.h1`
    ${tw`font-semibold text-2xl text-yellow-700`}
`

export const SGridLayout = styled.div`
    ${tw`grid gap-2 sm:min-w-[500px] md:max-w-[1000%] lg:max-w-[143%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 justify-items-center `}
`
