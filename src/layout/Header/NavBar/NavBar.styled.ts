import styled from 'styled-components'
import tw from 'twin.macro'

export const SNavBarHeader = styled.header`
    ${tw`min-w-[1000px]`}
`
export const SNavBarFlexContainer = styled.div`
    ${tw`flex bg-amazonclone text-white h-[60px]`}
`
export const SContentsDiv = styled.div`
    ${tw`flex items-center m-4`}
`

export const SPaddingDiv = styled.div`
    ${tw`pr-4 pl-4`}
`

export const SFirstTitle = styled.h1`
    ${tw`text-sm xl:text-base font-bold `}
`
export const SSecondTitle = styled(SFirstTitle)`
    ${tw` cursor-pointer`}
`
