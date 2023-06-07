import { ButtonHTMLAttributes } from 'react'

import { FormButton, SPrimaryBTN, SSecondaryBTN } from './Button.styled'

type ButtonProps = {
    mode: string
}

type FullButtonProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
    mode,
    children,
    onClick,
    className,
    disabled,
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
            <FormButton
                onClick={onClick}
                className={className}
                disabled={disabled}
            >
                {children}
            </FormButton>
        )
    }
    throw new Error(`Invalid mode: ${mode}`)
}
