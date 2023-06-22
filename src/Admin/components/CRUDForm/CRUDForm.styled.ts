import { ErrorMessage } from 'formik'

import styled, { css } from 'styled-components'
import tw from 'twin.macro'

type InputProps = {
  errors: boolean
  touched: boolean
}

export const Input = styled.input<InputProps>`
  ${tw`bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg hover:border-blue-200 focus:border-blue-200 block w-full outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  `}

  ${({ errors, touched }) =>
    errors &&
    touched &&
    css`
      ${tw`border-red-300 hover:border-red-300 focus:border-red-300`};
    `}
`

export const Label = styled.label`
  ${tw`my-2 text-sm font-medium text-gray-900 dark:text-white`}
`
export const ErrorMsg = styled(ErrorMessage)`
  ${tw`my-2 text-sm font-medium text-red-400`}
`

export const BrandLable = styled.label`
  ${tw`mb-2 text-sm font-medium text-gray-900 dark:text-white`}
`
export const BrandError = styled(ErrorMessage)`
  ${tw`mb-2  text-sm font-medium text-red-400`}
`

export const TextArea = styled.textarea<InputProps>`
  ${tw` p-2.5 w-full  h-64 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 hover:border-blue-200 focus:border-blue-200  dark:bg-gray-700 dark:border-gray-600 outline-none `}

  ${({ errors, touched }) =>
    errors &&
    touched &&
    css`
      ${tw`border-red-300 hover:border-red-300 focus:border-red-300`};
    `}
`

export const Btn = styled.button`
  ${tw`w-[60%] items-center text-blue-500 bg-transparent hover:bg-blue-100 focus:ring-2 focus:ring-blue-100 font-medium rounded-lg text-sm md:text-lg px-5 py-3  border border-blue-500 dark:bg-transparent dark:hover:bg-blue-100 dark:border-blue-500 focus:outline-none dark:focus:ring-blue-100`}
`

export const BackBtn = styled.button`
  ${tw`w-[35%] items-center text-blue-500 bg-transparent hover:bg-blue-100 focus:ring-2 focus:ring-blue-100 font-medium rounded-lg text-sm md:text-lg px-5 py-3  border border-blue-500 dark:bg-transparent dark:hover:bg-blue-100 dark:border-blue-500 focus:outline-none dark:focus:ring-blue-100`}
`

export const BtnContainer = styled.div`
  ${tw`w-full flex justify-between mt-8`}
`

export const FlexCol = styled.div`
  ${tw`flex flex-col`}
`

export const FlexJustify = styled.div`
  ${tw`flex flex-col justify-between md:flex-row`}
`
