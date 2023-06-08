import { ButtonHTMLAttributes } from 'react'

import { SPrimaryBTN, SSecondaryBTN, FormBtn } from './Button.styled'

type ButtonProps = {
    mode: string
    type?: 'submit' | 'button'
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
    if (mode === 'primary') {
        return (
            <SPrimaryBTN
                onClick={onClick}
                className={className}
                disabled={disabled}
            >
                {children}
            </SPrimaryBTN>
        )
    }
    if (mode === 'secondary') {
        return (
            <SSecondaryBTN
                onClick={onClick}
                className={className}
                disabled={disabled}
            >
                {children}
            </SSecondaryBTN>
        )
    }

    if (mode === 'form') {
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
    }

    throw new Error(`Invalid mode: ${mode}`)
}
