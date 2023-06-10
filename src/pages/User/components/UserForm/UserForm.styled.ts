import { ErrorMessage } from 'formik'

import styled from 'styled-components'
import tw from 'twin.macro'

export const ErrorMsg = styled(ErrorMessage)`
    ${tw`block  capitalize tracking-wide text-red-300 text-sm sm:text-[16px] md:text-xl font-semibold mb-2.5`}
`

export const MainContainer = styled.div`
    ${tw`py-6 rounded-lg w-full sm:w-[90%] md:w-[75%] lg:w-[85%]`}
`

export const FieldContainer = styled.div`
    ${tw`flex flex-col md:flex-row `}
`

export const Label = styled.label`
    ${tw`block  capitalize tracking-wide text-gray-700 text-sm sm:text-[16px] md:text-xl font-semibold mb-2.5`}
`

export const Input = styled.input`
    ${tw`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
`
