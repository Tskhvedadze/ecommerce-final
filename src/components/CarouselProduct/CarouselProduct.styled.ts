import styled from 'styled-components'
import tw from 'twin.macro'

export const SDivContainer = styled.div`
    ${tw`bg-white m-4 font-semibold text-2xl text-yellow-700`}
`
export const SDivHeader = styled.div`
    ${tw`text-2xl font-semibold pb-5`}
`

export const SRatingContainer = styled.div`
    ${tw`flex  items-center mt-3 `}

    span {
        ${tw`bg-yellow-light text-yellow-dark text-xs font-semibold  px-2.5 py-0.5 rounded dark:bg-yellow-dark dark:text-yellow-light ml-6`}
    }

    .go4197845992 {
        font-size: 1rem;
    }
`

export const SLoadingDiv = styled.div`
    ${tw`h-[200px] flex justify-center items-center text-orange-400`}
`
