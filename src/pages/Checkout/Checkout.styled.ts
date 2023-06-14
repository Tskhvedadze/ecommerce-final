import styled from 'styled-components'
import tw from 'twin.macro'

export const MainLayout = styled.div`
    ${tw`flex flex-col lg:flex-row  justify-evenly items-center w-full my-8`}
`

export const ContentDiv = styled.div`
    ${tw`w-[80%] lg:w-[60%]`}
`
export const FormDiv = styled.div`
    ${tw`w-[80%] lg:w-[30%]`}
`
