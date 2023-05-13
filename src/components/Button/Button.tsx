import { ReactNode } from 'react'

import { SPrimaryBTN, SSecondaryBTN } from './Button.styled'

type ButtonProps = {
    mode?: string
    children: ReactNode
}

export const Button = ({ mode, children }: ButtonProps): JSX.Element => {
    if (mode === 'primary') {
        return <SPrimaryBTN>{children}</SPrimaryBTN>
    }
    if (mode === 'secondary') {
        return <SSecondaryBTN>{children}</SSecondaryBTN>
    }
    throw new Error(`Invalid mode: ${mode}`)
}
