import styled from 'styled-components'
import tw from 'twin.macro'

export const MainFlexContainer = styled.div`
    ${tw`w-full flex  justify-between px-12 sm:px-20 border-b py-3`}
`

export const StyledImg = styled.img`
    ${tw`w-32 mix-blend-difference hover:scale-110 transform transition-all duration-500`}
`
