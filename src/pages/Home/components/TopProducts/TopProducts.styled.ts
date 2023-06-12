import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
    ${tw`bg-white mx-3 mt-10`}

    p {
        ${tw`text-gray-700`}
    }
`

export const StyledImg = styled.img`
    ${tw`h-[250px] w-[250px] border rounded `}
`

export const StyledParagraph = styled.p`
    ${tw`relative bg-orange-400  bottom-[35px] font-semibold w-[70%] text-end`}
`

export const ErrorText = styled.h1`
    ${tw`h-[30vh] flex justify-center items-center text-3xl text-red`}
`
