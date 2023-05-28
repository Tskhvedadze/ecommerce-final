import { Spin } from 'antd'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
    ${tw`bg-white m-3 mt-10`}

    p {
        ${tw`text-gray-700`}
    }
`
export const StyledSpin = styled(Spin)`
    ${tw`flex justify-center items-center h-[200px] `}
`
