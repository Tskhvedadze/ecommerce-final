/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from '..'

import { ProductsProps } from 'types/productsAPI.types'
import { CardPhotoSwiper } from './CardPhotoSwiper/CardPhotoSwiper'

import {
    SCardContainer,
    SCardContent,
    SCardTitle,
    SCardPriceContainer,
    SCardPrice,
} from './Card.styled'

export type CardProps = {} & Omit<
    ProductsProps,
    'id' | 'thumbnail' | 'description' | 'category' | 'brand' | 'rating'
>

export const Card = ({ price, images, title }: CardProps) => {
    return (
        <SCardContainer>
            <CardPhotoSwiper images={images} />
            <SCardContent>
                <a href='#' className='card-link'>
                    <SCardTitle>{title}</SCardTitle>
                </a>
            </SCardContent>
            <SCardPriceContainer>
                <SCardPrice>${price}</SCardPrice>
                <Button mode='secondary'>Add to Cart</Button>
            </SCardPriceContainer>
        </SCardContainer>
    )
}
