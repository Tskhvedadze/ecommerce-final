import styled from 'styled-components'
import tw from 'twin.macro'

export const SCardDiv = styled.div`
    ${tw`h-[410px] bg-white z-30 m-3 `}
`
export const STitleDiv = styled.div`
    ${tw`text-lg xl:text-xl font-semibold ml-4 mt-4 `}
`
export const SImgDiv = styled.div`
    ${tw`h-[300px] m-4 `}

    & > img {
        ${tw`h-[100%] w-[100%] object-cover`}
    }
`
export const SLinkDiv = styled.div`
    ${tw`text-xs xl:text-sm text-blue-400 ml-4 cursor-pointer  hover:text-blue-300`}
`
