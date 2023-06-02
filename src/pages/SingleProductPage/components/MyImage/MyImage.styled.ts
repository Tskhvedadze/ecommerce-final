import styled from 'styled-components'
import tw from 'twin.macro'

export const MainFlexContainer = styled.div`
    ${tw`flex flex-col items-baseline sm:items-center mr-20  w-[50%] `}
`

export const StyledPrimaryImage = styled.img`
    ${tw`h-[350px] w-[400px] mb-6 rounded`}
`

export const InnerFlexContainer = styled.div`
    ${tw`flex  flex-wrap justify-start mb-4`}
`

export const StyledSecondaryImage = styled.img`
    ${tw`w-[100px] h-[100px] m-3 border rounded-lg cursor-pointer transform-gpu hover:scale-125 transition-transform duration-300`}
`
