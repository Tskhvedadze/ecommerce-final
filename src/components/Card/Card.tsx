/* eslint-disable jsx-a11y/anchor-is-valid */
import Rating from 'react-star-rate'

import { Button } from '..'

import { ProductsProps } from 'types/productsAPI.types'
import { CardPhotoSwiper } from './CardPhotoSwiper/CardPhotoSwiper'

import {
    SCardDivBox,
    SContentDiv,
    SFlexDivPrice,
    SFlexDivRating,
    SPriceSpan,
    SRatingSpan,
    STitle,
} from './Card.styled'

export type CardProps = {} & Omit<
    ProductsProps,
    'id' | 'thumbnail' | 'description' | 'category' | 'brand'
>

export const Card = ({ price, rating, images, title }: CardProps) => {
    return (
        <SCardDivBox>
            <CardPhotoSwiper images={images} />
            <SContentDiv>
                <a href='#' className='text decoration-inherit'>
                    <STitle>{title}</STitle>
                </a>

                <SFlexDivRating>
                    <Rating value={rating} disabled />
                    <SRatingSpan>{rating}</SRatingSpan>
                </SFlexDivRating>
            </SContentDiv>
            <SFlexDivPrice>
                <SPriceSpan>${price}</SPriceSpan>
                <Button mode='secondary'>Add to cart</Button>
            </SFlexDivPrice>
        </SCardDivBox>
    )
}
