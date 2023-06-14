import { ErrorMessage } from 'formik'

import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
    ${tw`w-full justify-center items-center lg:col-span-4 pb-4 lg:py-20`}

    h1 {
        ${tw` text-2xl font-medium text-gray-700 sm:text-3xl`}

        span {
            ${tw`block h-0.5  bg-teal-600  lg:w-[227px]`}
        }
    }
`

export const WFull = styled.div`
    ${tw`w-full`}
`

export const Label = styled.label`
    ${tw`text-xs sm:text-sm font-semibold text-gray-700`}
`

export const FullNameInput = styled.input`
    ${tw`block w-full mt-1 rounded border-gray-300 bg-gray-200 py-3 px-4 text-sm placeholder-gray-500 shadow-sm outline-none transition focus:ring-1 focus:ring-teal-500`}
`

export const CardNumInput = styled.input`
    ${tw`block w-full mt-1 rounded border-gray-300 bg-gray-200 py-3 px-4 pr-10 text-sm placeholder-gray-500 shadow-sm outline-none transition focus:ring-1 focus:ring-teal-500`}
`

export const ExpSecuContainer = styled.div`
    ${tw`flex flex-col sm:flex-row w-full justify-between`}

    & > div:first-child {
        ${tw`flex flex-row items-center justify-between sm:justify-start`}

        & > div:first-child {
            ${tw`flex flex-col mr-2 sm:mr-0`}
        }

        & > div:last-child {
            ${tw`flex flex-col `}
        }
    }

    & > div:last-child {
        ${tw`flex flex-col items-start sm:items-end w-full mt-4 sm:mt-0`}
    }
`

export const ExpYearInput = styled.input`
    ${tw`rounded mt-1 w-full border-gray-300 bg-gray-200 py-3 px-4 mr-0 sm:mr-1 text-sm placeholder-gray-500 shadow-sm outline-none transition focus:ring-1 focus:ring-teal-500`}
`
export const ExpMonthInput = styled.input`
    ${tw`rounded mt-1 w-full border-gray-300 bg-gray-200 py-3 px-4  ml-0 sm:ml-1 text-sm placeholder-gray-500 shadow-sm outline-none transition focus:ring-1 focus:ring-teal-500`}
`

export const SecurityInput = styled.input`
    ${tw`rounded w-full sm:w-[80%] mt-1 border-gray-300 bg-gray-200 py-3 px-4 text-sm placeholder-gray-500 shadow-sm outline-none transition focus:ring-1 focus:ring-teal-500`}
`
export const CardInput = styled.input`
    ${tw`block w-full mt-1 rounded border-gray-300 bg-gray-200 py-3 px-4 text-sm placeholder-gray-500 shadow-sm outline-none transition focus:ring-1 focus:ring-teal-500`}
`

export const ErrorMsg = styled(ErrorMessage)`
    ${tw`text-xs sm:text-sm font-semibold text-red-400`}
`
