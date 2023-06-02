import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
    ${tw`bg-white m-3 mt-10`}

    p {
        ${tw`text-gray-700`}
    }
`

export const StyledImg = styled.img`
    ${tw`h-[250px] w-[250px] border rounded mt-3`}
`

export const StyledParagraph = styled.p`
    ${tw`relative bg-orange-400  bottom-[35px] font-semibold w-[70%] text-end`}
`
