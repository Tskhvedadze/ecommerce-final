import styled from 'styled-components'
import tw from 'twin.macro'

export const MainContainer = styled.div`
  ${tw`flex flex-col-reverse items-center lg:items-start w-full lg:w-[90%] justify-between lg:flex-row lg:pt-8 py-6 gap-5`}
`
export const EditFormContainer = styled.div`
  ${tw`w-[90%] lg:w-[50%]`}
`
export const UploadContainer = styled.div`
  ${tw`flex items-center flex-col`}
`
