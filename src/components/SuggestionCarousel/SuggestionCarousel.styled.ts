import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
    ${tw`bg-white m-3`}

    p {
        ${tw`text-gray-700`}
    }
`
export const Header = styled.div`
    ${tw`text-2xl font-semibold pb-5 text-yellow-700`}
`

export const LoadingDiv = styled.div`
    ${tw`h-[200px] flex justify-center items-center `}
`
