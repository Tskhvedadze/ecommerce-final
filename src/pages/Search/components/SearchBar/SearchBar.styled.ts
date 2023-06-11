import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import styled from 'styled-components'
import tw from 'twin.macro'

type TInputContainer = {
    isFocused: boolean
}

export const SearchContainer = styled.div`
    ${tw`flex grow relative items-center justify-center z-50 `}
`

export const MainContainer = styled.div`
    ${tw`w-[95%] flex flex-col `}
`
export const ResultsContainer = styled.div`
    ${tw`bg-white rounded-bl-lg rounded-br-lg top-[40.3px]  h-[45vh] w-[95%] absolute z-10 overflow-auto`}
`

export const InputContainer = styled.div<TInputContainer>`
    ${tw`flex items-center h-10 bg-amazonclone-yellow `}

    ${({ isFocused }) => (!isFocused ? tw`rounded-lg` : tw`rounded-t-lg`)}

    input {
        ${tw`flex grow items-center h-[100%] rounded-l outline-none text-gray-dark p-2 text-lg`}
        ${({ isFocused }) =>
            !isFocused ? tw`rounded-l` : tw` rounded-bl-none `}
    }

    button {
        ${tw`w-[45px]`}
    }
`

export const SearchIcon = styled(MagnifyingGlassIcon)`
    ${tw`h-[27px] m-auto stroke-slate-900 `}
`

export const EmptyResultContainer = styled.div`
    ${tw`w-full h-full flex justify-center items-center`}
`

export const EmptyText = styled.p`
    ${tw`text-gray-700 text-lg`}
`

export const EmptySpan = styled.span`
    ${tw`font-semibold ml-1`}

    span {
        ${tw`text-amazonclone-yellow`}
    }
`

export const ErrorText = styled.h1`
    ${tw`text-2xl text-red-400`}
`
