import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
    ${tw`col-span-full flex flex-col px-4 lg:col-span-4 pt-4 pb-20 w-full rounded-lg bg-amazonclone-background`}
`
export const UnorderList = styled.ul`
    ${tw`space-y-5 h-[40vh]  overflow-auto pb-2`}
`
export const TotalPrice = styled.p`
    ${tw`flex justify-between text-lg font-bold text-gray-700`}
`

export const FooterDiv = styled.div`
    ${tw`mt-8 text-gray-700`}
`
