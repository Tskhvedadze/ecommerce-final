import styled from 'styled-components'
import tw from 'twin.macro'

export const Input = styled.input`
  ${tw`bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full outline-blue-100 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  `}
`

export const Label = styled.label`
  ${tw`my-2 font-medium text-gray-900 dark:text-white`}
`

export const BrandLable = styled.label`
  ${tw`mb-2 font-medium text-gray-900 dark:text-white`}
`

export const TextArea = styled.textarea`
  ${tw` p-2.5 w-full  h-56 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 outline-blue-100 `}
`

export const Btn = styled.button`
  ${tw`w-full items-center text-blue-500 bg-transparent hover:bg-blue-100 focus:ring-2 focus:ring-blue-100 font-medium rounded-lg text-lg px-5 py-3 mt-10 border border-blue-500 dark:bg-transparent dark:hover:bg-blue-100 dark:border-blue-500 focus:outline-none dark:focus:ring-blue-100`}
`

export const FlexCol = styled.div`
  ${tw`flex flex-col`}
`

export const FlexJustify = styled.div`
  ${tw`flex justify-between`}
`
