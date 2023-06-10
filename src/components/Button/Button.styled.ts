import styled from 'styled-components'
import tw from 'twin.macro'

export const SPrimaryBTN = styled.button`
    ${tw`text-yellow-700 hover:text-white border border-yellow-700 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-lg px-5 py-2 text-center dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-500 dark:focus:ring-yellow-900`}
`

export const SSecondaryBTN = styled.button`
    ${tw`
    text-white bg-orange hover:bg-orange-light focus:ring-2 focus:outline-none focus:ring-orange-light font-medium rounded-tl rounded-tr text-sm px-1.5 py-2 text-center dark:bg-orange-dark dark:hover:bg-orange dark:focus:ring-orange-light
    disabled:bg-orange-light disabled:cursor-not-allowed
  `}
`

export const FormBtn = styled.button`
    ${tw`w-full text-white bg-login-600 hover:bg-login-700 focus:ring-4 focus:outline-none focus:ring-login-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-login-600 dark:hover:bg-login-700 dark:focus:ring-login-800`}
`

export const UserBtn = styled.button`
    ${tw`text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600`}
`

export const UpdateBtn = styled.button`
    ${tw`w-full text-gray-600 bg-login-300 hover:bg-login-400 focus:ring-1 focus:outline-none focus:ring-login-200 font-medium rounded-lg text-lg px-5 py-3 text-center dark:bg-login-300 dark:hover:bg-login-400 dark:focus:ring-login-200`}
`

export const SuggestionBtn = styled.button`
    ${tw`px-1 capitalize text-xl hover:text-gray-400 disabled:text-gray-400 `}
`
