import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
    ${tw`col-span-full flex flex-col px-4 lg:col-span-4 pt-4 pb-20 w-full rounded-lg bg-amazonclone-background`}
`
export const UnorderList = styled.ul`
    ${tw`space-y-5 h-[40vh]  overflow-auto pb-2`}
`
export const Link = styled(NavLink)`
    ${tw`underline text-blue-400 font-normal transition-colors duration-300 hover:text-blue-300 uppercase ml-2`}
`

export const TotalPrice = styled.p`
    ${tw`flex justify-between text-lg font-bold text-gray-700`}
`

export const FooterDiv = styled.div`
    ${tw`mt-8 text-gray-700`}

    p {
        ${tw`flex flex-col`}

        & > span:first-child {
            ${tw`text-sm font-bold text-gray-700 pb-1.5`}
        }
        & > span:last-child {
            ${tw`text-xs font-medium text-gray-700`}
        }
    }
`

export const EmptyMsg = styled.p`
    ${tw`inline-block text-center pt-20 sm:pt-32 text-sm lg:text-lg font-semibold   text-amazonclone-yellow`}
`
