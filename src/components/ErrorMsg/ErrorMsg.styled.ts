import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledErrorMsgContainer = styled.div`
    ${tw`h-[100vh] flex justify-center items-center`}
`

export const StyledErrorText = styled.h1`
    ${tw`text-3xl text-red-700 uppercase`}
`
