import { ReactNode, MouseEvent, RefObject, MutableRefObject, Ref } from 'react'

import { SPrimaryBTN, SSecondaryBTN } from './Button.styled'

type ButtonProps = {
    mode?: string
    children: ReactNode
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
    className?: string
    disabled?: boolean
    ref?: any
}

export const Button = ({
    mode,
    children,
    onClick,
    className,
    disabled,
    ref,
}: ButtonProps): JSX.Element => {
    if (mode === 'primary') {
        return (
            <SPrimaryBTN
                onClick={onClick}
                className={className}
                disabled={disabled}
                ref={ref}
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
                ref={ref}
            >
                {children}
            </SSecondaryBTN>
        )
    }
    throw new Error(`Invalid mode: ${mode}`)
}
