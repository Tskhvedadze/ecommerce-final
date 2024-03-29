import styled from 'styled-components'
import tw from 'twin.macro'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { AiFillPlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

export const TotalQuantityContainer = styled.div`
  ${tw`flex flex-row items-center justify-between  mb-1 text-[14px]`}

  p {
    ${tw`text-green-800`}
  }
`

export const CartItemContainer = styled.div`
  ${tw`flex flex-col mb-1 border-b border-gray-900`}
`

export const ItemWrapper = styled.div`
  ${tw`flex items-center gap-4 justify-between`}
`

export const ItemImage = styled.img`
  ${tw`w-16 h-16 rounded cursor-pointer hover:scale-90 transition-transform duration-300`}
`

export const QuantityContainer = styled.div`
  ${tw`flex items-center justify-between`}
`

export const RemoveItem = styled(AiOutlineMinusCircle)`
  ${tw`text-gray-500 cursor-pointer transition-colors duration-200 hover:text-gray-700 active:text-gray-900 h-6 w-6`}
`

export const QuantityText = styled.span`
  ${tw`text-lg font-semibold w-12 text-center`}
`

export const AddItem = styled(AiFillPlusCircle)`
  ${tw`text-gray-500 cursor-pointer transition-colors duration-200 hover:text-gray-700 active:text-gray-900 h-6 w-6`}
`

export const DeleteIcon = styled(RiDeleteBin6Line)`
  ${tw`text-red-500 cursor-pointer transition-colors duration-200 hover:text-red-200 active:text-red-600 h-6 w-6`}
`
