import styled from 'styled-components'
import tw from 'twin.macro'

export const Div = styled.div`
    ${tw`bg-amazonclone-background `}
`

export const Container = styled.div`
    ${tw`min-w-full max-w-screen-lg mx-auto bg-purple-500 sm:min-w-[500px] sm:max-w-[1000px]`}
`

export const SProductsContainer = styled.div`
    ${tw`pl-4 pr-4 flex justify-between items-center w-[100%] p-2`}
`

export const SHomeTitle = styled.h1`
    ${tw`font-semibold text-2xl text-yellow-700`}
`
export const SProductsBTN = styled.button`
    ${tw`text-yellow-700 hover:text-white border border-yellow-700 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-lg px-5 py-2 text-center dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-500 dark:focus:ring-yellow-900  `}
`
