import { ButtonHTMLAttributes } from 'react'

import {
    SPrimaryBTN,
    SSecondaryBTN,
    FormBtn,
    UserBtn,
    UpdateBtn,
    SuggestionBtn,
} from './Button.styled'

type ButtonProps = {
    mode: 'primary' | 'secondary' | 'form' | 'user' | 'update' | 'suggestion'
    type?: 'submit' | 'button'
    disabled?: boolean
}

type FullButtonProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
    mode,
    children,
    onClick,
    className,
    disabled,
    type,
}: FullButtonProps): JSX.Element => {
    switch (mode) {
        case 'primary':
            return (
                <SPrimaryBTN
                    onClick={onClick}
                    className={className}
                    disabled={disabled}
                >
                    {children}
                </SPrimaryBTN>
            )
        case 'secondary':
            return (
                <SSecondaryBTN
                    onClick={onClick}
                    className={className}
                    disabled={disabled}
                >
                    {children}
                </SSecondaryBTN>
            )
        case 'form':
            return (
                <FormBtn
                    onClick={onClick}
                    className={className}
                    disabled={disabled}
                    type={type}
                >
                    {children}
                </FormBtn>
            )
        case 'user':
            return (
                <UserBtn
                    onClick={onClick}
                    className={className}
                    disabled={disabled}
                    type={type}
                >
                    {children}
                </UserBtn>
            )
        case 'update':
            return (
                <UpdateBtn
                    onClick={onClick}
                    className={className}
                    disabled={disabled}
                    type={type}
                >
                    {children}
                </UpdateBtn>
            )
        case 'suggestion':
            return (
                <SuggestionBtn
                    onClick={onClick}
                    className={className}
                    disabled={disabled}
                    type={type}
                >
                    {children}
                </SuggestionBtn>
            )
        default:
            throw new Error(`Invalid mode: ${mode}`)
    }
}
