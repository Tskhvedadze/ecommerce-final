import { Image, Button } from 'antd'
import { TrashIcon } from '@heroicons/react/24/solid'

import styled from 'styled-components'
import tw from 'twin.macro'

export const ImagesGridContainer = styled.div`
  ${tw`grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-5 max-h-[700px] overflow-auto mb-4`}
`

export const ImageContainer = styled.div`
  ${tw`relative flex`}
`

export const DeleteIcon = styled(TrashIcon)`
  ${tw`absolute w-5 h-5 cursor-pointer  top-1 right-1 text-red-500 hover:text-red-300`}
`
export const AntdImg = styled(Image)`
  ${tw`border rounded border-gray-300 `}
`

export const AntdBtn = styled(Button)`
  ${tw`flex items-center`}
`
