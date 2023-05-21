import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'

export const BreadcrumbContainer = styled.div`
    ${tw`flex justify-center my-5 text-[1rem]`}
`

export const BreadcrumbItem = styled.div`
    ${tw`inline-block`}

    &:not(:last-child)::after {
        ${tw`mx-0.5 text-gray-800`}
        content: '>';
    }
`

export const BreadcrumbLink = styled(Link)`
    ${tw`text-gray-500  py-0.5 px-2`}
    ${tw`transition-colors duration-300`}
  
  &:hover {
        ${tw`text-gray-700 rounded border-gray-300 bg-amazonclone-background`}
        transition-delay: 0.02s;
    }
`
