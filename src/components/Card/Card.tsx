/* eslint-disable jsx-a11y/anchor-is-valid */
import Rating from 'react-star-rate'

import { CardPhotoSwiper } from './CardPhotoSwiper/CardPhotoSwiper'

import {
    SAddToCardBtn,
    SCardDiv,
    SCardDivBox,
    SContentDiv,
    SFlexDivPrice,
    SFlexDivRating,
    SPriceSpan,
    SRatingSpan,
    STitle,
} from './Card.styled'

export type CardProps = {
    title: string
    price: number
    rating: number
    brand: string
    category: string
    images: string[]
}

export const Card = ({
    title,
    price,
    rating,
    brand,
    category,
    images,
}: CardProps) => {
    return (
        <SCardDiv>
            <SCardDivBox>
                <CardPhotoSwiper images={images} />
                <SContentDiv>
                    <a href='#'>
                        <STitle>{brand}</STitle>
                    </a>

                    <SFlexDivRating>
                        <Rating value={rating} disabled />
                        <SRatingSpan>{rating}</SRatingSpan>
                    </SFlexDivRating>

                    <SFlexDivPrice>
                        <SPriceSpan>${price}</SPriceSpan>
                        <SAddToCardBtn>Add to cart</SAddToCardBtn>
                    </SFlexDivPrice>
                </SContentDiv>
            </SCardDivBox>
        </SCardDiv>
    )
}
