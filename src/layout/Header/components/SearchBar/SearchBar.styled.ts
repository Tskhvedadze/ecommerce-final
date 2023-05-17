import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import styled from 'styled-components'
import tw from 'twin.macro'

export const SearchContainer = styled.div`
    ${tw`flex grow relative items-center`}
`

export const MainContainer = styled.div`
    ${tw`w-[100%]`}
`

export const InputContainer = styled.div`
    ${tw`flex items-center h-10 bg-amazonclone-yellow rounded`}

    input {
        ${tw`flex grow items-center h-[100%] rounded-l text-gray-dark focus:outline-yellow p-2 text-lg`}
    }

    button {
        ${tw`w-[45px]`}
    }
`

export const SearchIcon = styled(MagnifyingGlassIcon)`
    ${tw`h-[27px] m-auto stroke-slate-900`}
`
