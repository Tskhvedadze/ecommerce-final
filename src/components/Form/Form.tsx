import { PropsWithChildren } from 'react'

import { StyledForm } from './Form.styled'

export const Form = ({ children }: PropsWithChildren) => {
    return <StyledForm>{children}</StyledForm>
}
