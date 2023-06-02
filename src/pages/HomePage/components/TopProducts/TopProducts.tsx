import React from 'react'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import { TProducts } from 'types/productsAPI.types'
import { Container, StyledImg, StyledParagraph } from './TopProducts.styled'
import { useTopProducts } from './hook/useTopProducts'

type TopProductsProps = {
    slidesPerView: number
    spaceBetween: number
}

export const TopProducts = React.memo(
    ({ slidesPerView, spaceBetween }: TopProductsProps) => {
        const { data } = useTopProducts()
        const products = data?.products || []

        return (
            <Container>
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={spaceBetween}
                    navigation={true}
                    modules={[Navigation]}
                >
                    {products.map(({ id, brand, images }: TProducts) => (
                        <SwiperSlide key={id}>
                            <NavLink to={`/products/${id}`}>
                                <StyledImg src={images.at(0)} alt={brand} />
                                <StyledParagraph>{brand}</StyledParagraph>
                            </NavLink>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        )
    },
)
