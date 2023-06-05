import styled from 'styled-components'
import tw from 'twin.macro'

export const ContactSection = styled.section`
    ${tw` bg-white dark:bg-gray-900`}
`

export const ContentContainer = styled.div`
    ${tw`py-8 lg:py-16 px-4 mx-auto max-w-screen-md`}
`

export const Title = styled.h2`
    ${tw`mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white`}
`

export const Paragraph = styled.p`
    ${tw`mb-8 lg:mb-16 font-light text-center text-gray-700 dark:text-gray-400 sm:text-xl`}
`
