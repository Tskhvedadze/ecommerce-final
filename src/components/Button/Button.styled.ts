import styled from 'styled-components'
import tw from 'twin.macro'

export const SPrimaryBTN = styled.button`
    ${tw`text-yellow-700 hover:text-white border border-yellow-700 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-lg px-5 py-2 text-center dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-500 dark:focus:ring-yellow-900`}
`

export const SSecondaryBTN = styled.button`
    ${tw`
    text-white  bg-orange hover:bg-orange-light focus:ring-2 focus:outline-none focus:ring-orange-light font-medium rounded text-sm px-1.5 py-1 text-center dark:bg-orange-dark dark:hover:bg-orange dark:focus:ring-orange-light
    disabled:bg-orange-light disabled:cursor-not-allowed
    `}
`
