import { NavLink } from 'react-router-dom'
import { EyeIcon } from '@heroicons/react/24/outline'

import styled from 'styled-components'
import tw from 'twin.macro'

export const List = styled.li`
  ${tw`w-full  flex  py-2 border-b`}

  & > div:first-child {
    ${tw`flex w-full items-center`}
  }

  & > div:last-child {
    ${tw`flex flex-col items-center sm:flex-row justify-between`}
  }
`

export const Img = styled.img`
  ${tw`w-[60px] h-[60px] rounded-lg mr-2`}
`

export const Content = styled.div`
  ${tw`text-sm text-gray-800`}
`

export const EditBtn = styled(NavLink)`
  ${tw`py-1 px-2  rounded-lg hover:bg-gray-200 focus:ring-2 ring-gray-300 text-blue-gray-400 transition-all duration-300 ease-in-out`}
`

export const DeleteBtn = styled.button`
  ${tw`border py-1 px-2 border-red-400 rounded-lg hover:bg-red-100 focus:ring-2 ring-red-200 text-gray-800 transition-all duration-300 ease-in-out`}
`

export const Eye = styled(EyeIcon)`
  ${tw` w-5 h-5 cursor-pointer text-green-300 transition-all duration-300 transform hover:text-green-400 hover:scale-[1.50] hover:duration-300`}
`
