import { ErrorMessage } from 'formik'

import styled from 'styled-components'
import tw from 'twin.macro'

export const ErrorMsg = styled(ErrorMessage)`
    ${tw`block mb-2 text-sm font-medium text-red-400`}
`

export const FlexCol = styled.div`
    ${tw`flex flex-col `}
`
export const FlexRow = styled.div`
    ${tw`flex w-full justify-between`}
`
