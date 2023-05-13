import styled from 'styled-components'
import tw from 'twin.macro'

export const SProductsContainer = styled.div`
    ${tw`pl-4 pr-4 flex justify-between items-center w-[100%] p-2`}
`

export const SHomeTitle = styled.h1`
    ${tw`font-semibold text-2xl text-yellow-700`}
`
export const SProductsBTN = styled.button`
    ${tw`text-yellow-700 hover:text-white border border-yellow-700 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-lg px-5 py-2 text-center dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-500 dark:focus:ring-yellow-900  `}
`
export const SGridLayout = styled.div`
    ${tw`grid gap-2 sm:min-w-[500px] md:max-w-[1000%] lg:max-w-[143%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 justify-items-center `}
`
