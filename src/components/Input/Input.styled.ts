import { Field } from 'formik'

import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledInput = styled(Field)`
    ${tw`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-login-600 focus:border-login-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
`
