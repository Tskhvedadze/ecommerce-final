import styled from 'styled-components'
import tw from 'twin.macro'

export const OuterContainer = styled.div`
    ${tw`flex items-center justify-center min-w-[1000px] `}
`

export const InnerContainer = styled.div`
    ${tw`flex flex-col md:flex-col justify-between items-center `}
`

export const FilterContainer = styled.div`
    ${tw`flex justify-evenly items-center flex-row  w-[100%] my-4 border `}

    h1 {
        ${tw`text-xl uppercase  mr-4 text-gray-600`}
    }
`

export const ResultsContainer = styled.div`
    ${tw`flex flex-col items-center w-[70%] sm:w-[90%] mb-8`}
`

export const ProductCardContainer = styled.div`
    ${tw`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  mx-auto my-10`}
`
