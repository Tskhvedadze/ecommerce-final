import { Form } from 'formik'
import styled from 'styled-components'
import tw from 'twin.macro'

export const SForm = styled(Form)`
  ${tw`space-y-8 border rounded-lg p-6 bg-gray-300`}
`

export const EmailInput = styled.input`
  ${tw`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}

  outline: 2px solid transparent;

  &:focus {
    outline-offset: 2px;
    outline-color: primary;
  }
`

export const SubjectInput = styled.input`
  ${tw`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}

  outline: 2px solid transparent;

  &:focus {
    outline-offset: 2px;
    outline-color: primary;
  }
`

export const TextArea = styled.textarea`
  ${tw`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}

  outline: 2px solid transparent;

  &:focus {
    outline-offset: 2px;
    outline-color: primary;
  }
`

export const Label = styled.label`
  ${tw`block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300`}
`

export const ButtonContainer = styled.div`
  ${tw`flex w-full justify-between`}
`

export const MessageFieldContainer = styled.div`
  ${tw`sm:col-span-2`}
`

export const FormButton = styled.button`
  ${tw`border py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-400`}
`
