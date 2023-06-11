import styled from 'styled-components'
import tw from 'twin.macro'

export const ContentLayout = styled.div`
    ${tw`grow min-w-[300px] max-w-[1000px] md:min-w-[1000px] md:max-w-[1477px] m-auto`}
`
export const Overlay = styled.div`
    ${tw`fixed w-full h-full bg-gray-800 opacity-[0.8] z-40`}
`
