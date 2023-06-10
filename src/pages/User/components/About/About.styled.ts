import styled from 'styled-components'
import tw from 'twin.macro'

export const MainContainer = styled.div`
    ${tw`bg-gray-100 py-6  px-3 rounded-lg w-full sm:w-[90%] md:w-[75%] lg:w-[85%]`}
`

export const AboutContainer = styled.div`
    ${tw`w-full flex  items-center justify-center  h-10 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700`}
`

export const AboutTitle = styled.h1`
    ${tw`font-medium text-xl text-gray-600 dark:text-gray-300`}
`
export const DetailsContainer = styled.div`
    ${tw` grid grid-cols-2 items-center border-b border-gray-300`}
`

export const DetailsTitle = styled.h2`
    ${tw`pl-6 font-semibold  py-2 sm:py-3 md:py-4  text-gray-700 text-sm sm:text-[16px] md:text-xl`}
`

export const DetailsParagraph = styled.p`
    ${tw`py-2 pr-6 flex w-full overflow-auto  text-left text-gray-600  text-sm sm:text-[16px] md:text-xl`}
`
