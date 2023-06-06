import { Form, Field } from 'formik'

import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledForm = styled(Form)`
    ${tw`space-y-4 md:space-y-6`}
`

export const StyledEmailInput = styled(Field)`
    ${tw`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-login-600 focus:border-login-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
`

export const StyledPasswordInput = styled(Field)`
    ${tw`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-login-600 focus:border-login-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
`

export const StyledLabel = styled.label`
    ${tw`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}
`

export const StyledButton = styled.button`
    ${tw`w-full text-white bg-login-600 hover:bg-login-700 focus:ring-4 focus:outline-none focus:ring-login-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-login-600 dark:hover:bg-login-700 dark:focus:ring-login-800`}
`
