import { Button } from 'antd'

import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledTitle = styled.h1`
    ${tw`text-red-500 text-2xl  text-center font-bold mb-6`}
`

export const StyledParagraph = styled.p`
    ${tw`text-gray-500 text-center mb-6`}
`

export const StyledButtonContainer = styled.div`
    ${tw`text-center`}
`

export const StyledAntdBtn = styled(Button)`
    ${tw`px-8`}
`
