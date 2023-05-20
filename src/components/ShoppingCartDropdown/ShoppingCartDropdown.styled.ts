import styled from 'styled-components'
import tw from 'twin.macro'

export const CartDropdownContainer = styled.div`
    ${tw`absolute w-[280px] h-[360px] flex flex-col px-1.5 py-0.5 border-2 rounded-2xl  bg-amazonclone-background top-16 right-5 z-10`}
`

export const CartItems = styled.div`
    ${tw`h-[280px] w-[100%] flex flex-col overflow-auto`}
`

export const EmptyMessage = styled.h1`
    ${tw`text-[18px] my-[50px] text-amazonclone`}
`
