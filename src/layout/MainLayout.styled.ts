import styled, { keyframes } from 'styled-components'
import tw from 'twin.macro'

export const ContentLayout = styled.div`
  ${tw`grow min-w-[300px] max-w-[1000px] md:min-w-[1000px] md:max-w-[1477px] min-h-screen m-auto`}
`
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 0.8; }
`

export const Overlay = styled.div`
  ${tw`fixed w-full h-full bg-gray-800 z-40`}
  animation: ${fadeIn} 0.5s ease-in-out forwards;
`
