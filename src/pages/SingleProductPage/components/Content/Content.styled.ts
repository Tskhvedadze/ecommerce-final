import { Button } from 'antd'
import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledContent = styled.div`
    ${tw`w-[57%] sm:w-[50%]`}
`

export const StyledParagraph = styled.p`
    ${tw`mb-2.5`}
`

export const Description = styled.div`
    ${tw`inline-block text-[20px] mb-2.5 text-gray-600`}
`

export const Brand = styled(StyledParagraph)``
export const Title = styled(StyledParagraph)``
export const Category = styled(StyledParagraph)``
export const Price = styled(StyledParagraph)``
export const DescriptionLabel = styled.p`
    ${tw`font-semibold text-gray-600 mb-2 `}
`

export const StyledLabel = styled.span`
    ${tw`font-semibold text-xl text-gray-600 mr-3`}
`
export const StyledValue = styled.span`
    ${tw`text-gray-700 uppercase text-lg font-semibold font-mono`}
`
export const StyledDollar = styled.span`
    ${tw`text-green-500 font-semibold mr-1`}
`
export const StyledPrice = styled.span`
    ${tw`text-green-600 font-semibold`}
`

export const RatingContainer = styled.div`
    ${tw`flex items-center mb-4`}
`

export const Rating = styled.p`
    ${tw`ml-5 font-semibold text-orange-400`}
`

export const AddToCartContainer = styled.div`
    ${tw`w-1/2 mt-20`}
`

export const StyledButton = styled(Button)`
    ${tw`w-full`}
`
