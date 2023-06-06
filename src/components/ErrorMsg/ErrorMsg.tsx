import { StyledErrorMsgContainer, StyledErrorText } from './ErrorMsg.styled'

type ErrorMsgProps = {
    errorText: string
}

export const ErrorMsg = ({ errorText }: ErrorMsgProps) => {
    return (
        <StyledErrorMsgContainer>
            <StyledErrorText>Error: {errorText}</StyledErrorText>
        </StyledErrorMsgContainer>
    )
}
