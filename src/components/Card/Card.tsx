import React from 'react'
import { SCardDiv } from './Card.styled'

type CardProps = {
    title: string
    img: string
    link: string
}

export const Card = ({ title, img, link }: CardProps) => {
    return (
        <SCardDiv>
            <div>{title}</div>
            <div></div>
            <div></div>
        </SCardDiv>
    )
}
