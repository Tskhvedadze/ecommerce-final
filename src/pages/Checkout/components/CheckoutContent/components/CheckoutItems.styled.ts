import { AiFillPlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'

import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
    ${tw`flex w-full justify-center items-center border-b border-gray-500`}
`

export const List = styled.li`
    ${tw`flex justify-between items-center pb-1 w-full`}
`

export const FlexDiv = styled.div`
    ${tw`flex items-center `}
`

export const Brand = styled.p`
    ${tw`text-base font-semibold text-gray-700`}
`

export const Title = styled.p`
    ${tw`text-sm font-medium text-gray-600 text-opacity-80`}
`

export const Img = styled.img`
    ${tw`max-h-16  rounded-lg`}
`

export const Price = styled.p`
    ${tw`text-sm font-semibold text-green-600 pr-2`}
`

export const QuantityDiv = styled.div`
    ${tw`flex flex-col sm:flex-row items-center justify-between`}
`

export const Remove = styled(AiOutlineMinusCircle)`
    ${tw`text-gray-400 cursor-pointer transition-colors duration-200 hover:text-gray-500 active:text-gray-900 h-6 w-6`}
`

export const Quantity = styled.span`
    ${tw`text-lg font-semibold w-12 text-center text-gray-600`}
`

export const Add = styled(AiFillPlusCircle)`
    ${tw`text-gray-400 cursor-pointer transition-colors duration-200 hover:text-gray-500 active:text-gray-900 h-6 w-6`}
`

export const Delete = styled(RiDeleteBin6Line)`
    ${tw`text-red-500 ml-3 mb-1 cursor-pointer transition-colors duration-200 hover:text-red-400 active:text-red-600 h-6 w-6`}
`
