import styled from 'styled-components'
import tw from 'twin.macro'

export const MainFlexContainer = styled.div`
    ${tw`flex flex-col`}
`

export const StyledHr = styled.hr`
    ${tw`my-5`}
`

export const SuggestionTitle = styled.h1`
    ${tw`pl-5  text-gray-600 font-semibold text-2xl`}
`
export const SuggestionGridContainer = styled.div`
    ${tw`grid grid-cols-2 sm:grid-cols-5 gap-4 px-4 mt-8`}
`
export const SuggestionInnerContainer = styled.div`
    ${tw``}
`

export const ErrorText = styled.h1`
    ${tw`h-[30vh] flex justify-center items-center text-3xl text-red`}
`
