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

export const EditBtn = styled.button`
  ${tw`border py-1.5 px-3 border-green-400 rounded-lg hover:bg-green-100 focus:ring-2 ring-green-200 text-gray-800 transition-all duration-300 ease-in-out`}
`

export const DeleteBtn = styled.button`
  ${tw`border py-1.5 px-3 border-red-400 rounded-lg hover:bg-red-100 focus:ring-2 ring-red-200 text-gray-800 transition-all duration-300 ease-in-out`}
`
