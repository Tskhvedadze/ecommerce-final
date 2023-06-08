import { InputHTMLAttributes } from 'react'

import { StyledInput } from './Input.styled'

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>

export const Input = (props: InputProps) => {
    return <StyledInput {...props} />
}
