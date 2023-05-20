import { Spin } from 'antd'

import styled from 'styled-components'
import tw from 'twin.macro'

export const OuterContainer = styled.div`
    ${tw`flex items-center justify-center min-w-[1000px] grow`}
`

export const InnerContainer = styled.div`
    ${tw`flex flex-col md:flex-col justify-between items-center`}
`

export const FilterContainer = styled.div`
    ${tw`flex justify-center items-center flex-row  md:w-[100%] my-4 border py-2`}

    h1 {
        ${tw`text-xl uppercase  mr-4 text-gray-600`}
    }
`

export const ResultsContainer = styled.div`
    ${tw`flex flex-col items-center w-full md:w-[90%] mb-8`}
`

export const StyledSpin = styled(Spin)`
    ${tw`flex justify-center items-center h-screen w-screen`}
`
export const ProductCardContainer = styled.div`
    ${tw`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2  mx-auto my-4`}

    @media (max-width: 398px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`

export const NoItemFound = styled.h1`
    ${tw`flex justify-center items-center h-screen capitalize text-2xl text-center text-gray-700 `}
`
