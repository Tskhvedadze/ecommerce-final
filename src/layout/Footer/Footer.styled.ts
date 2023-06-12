import styled from 'styled-components'
import tw from 'twin.macro'

export const FooterContent = styled.footer`
    ${tw`mx-auto w-full  py-6 `}
`

export const StyledFlexContainer = styled.div`
    ${tw`flex items-center justify-between mx-7`}

    span {
        ${tw`text-sm text-gray-400`}
    }

    div {
        ${tw`flex mt-2 space-x-6 justify-center`}

        a {
            ${tw`text-gray-500 hover:text-gray-400`}

            span {
                ${tw`sr-only`}
            }
        }
    }
`
