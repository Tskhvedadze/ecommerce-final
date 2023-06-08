import { PropsWithChildren } from 'react'
import { StyledLabel } from './Label.styled'

type LabelProps = {
    htmlFor: string
}

export const Label = ({ children, htmlFor }: PropsWithChildren<LabelProps>) => {
    return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
}
