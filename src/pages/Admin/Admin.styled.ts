import { Spin, Pagination } from 'antd'

import styled from 'styled-components'
import tw from 'twin.macro'

export const FlexContainer = styled.div`
  ${tw`w-full flex flex-col items-center`}
`

export const Header = styled.header`
  ${tw`w-[95%]  justify-between items-center flex p-2 mt-2 bg-gray-200 rounded-tl-lg rounded-tr-lg`}

  div {
    ${tw`w-[30%] rounded-lg`}
  }
`

export const Input = styled.input`
  ${tw`w-full p-1.5 rounded-lg border-[1px] text-gray-600 outline-none hover:border-green-300 focus:ring-[1px] focus:ring-green-300 transition-all duration-300 ease-in-out`}
`

export const CreateBtn = styled.button`
  ${tw`border py-1.5 px-3 border-green-400 rounded-lg hover:bg-green-100 focus:ring-2 ring-green-200 text-gray-800 transition-all duration-300 ease-in-out`}
`

export const UL = styled.ul`
  ${tw`w-[95%] flex flex-col items-center max-h-[77vh] overflow-y-auto`}
`

export const ErrorMsg = styled.h1`
  ${tw`w-full h-[80vh] text-2xl flex items-center justify-center text-red-400`}
`

export const Spinner = styled(Spin)`
  ${tw`w-full h-[77vh] flex items-center justify-center`}
`

export const StyledPagination = styled(Pagination)`
  ${tw`mt-2 mb-1`}
`
