import styled, { keyframes } from 'styled-components'
import tw from 'twin.macro'

type CartDropdownContainerProps = {
    isOpen: boolean
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`

export const CartDropdownContainer = styled.div<CartDropdownContainerProps>`
    ${tw`absolute w-[320px] h-[350px] flex flex-col items-center p-0.5 pt-2 border border-gray-300 rounded-lg bg-amazonclone-background top-[5rem] right-4 z-10`}
    animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.3s linear;
`

export const CartItems = styled.div`
    ${tw`h-[280px] w-[100%] flex flex-col overflow-auto text-amazonclone px-2 `}
`

export const EmptyMessage = styled.h1`
    ${tw`text-3xl font-bold text-gray-500 mt-10 text-center`}
`
