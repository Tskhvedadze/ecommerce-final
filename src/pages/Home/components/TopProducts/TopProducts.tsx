import React from 'react'
import { useQuery } from 'react-query'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import { TProducts } from 'types/productsAPI.types'
import { apiClient2 } from 'config/api/api'

import {
    Container,
    StyledImg,
    StyledParagraph,
    ErrorText,
} from './TopProducts.styled'

type TopProductsProps = {
    slidesPerView: number
    spaceBetween: number
}

export const TopProducts = React.memo(
    ({ slidesPerView, spaceBetween }: TopProductsProps) => {
        const {
            status,
            data,
            isError,
            error,
        }: { data: any; isError: boolean; error: any; status: string } =
            useQuery(['topProducts'], async () => {
                const response = await apiClient2.get(
                    `/products?limit=30&skip=50&select=images,brand`,
                )
                return response?.data
            })

        if (status === 'error' && isError)
            return <ErrorText>An error: {error.message}</ErrorText>

        return (
            <Container>
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={spaceBetween}
                    navigation={true}
                    modules={[Navigation]}
                >
                    {!isError &&
                        data?.products.map(
                            ({ id, brand, images }: TProducts) => (
                                <SwiperSlide key={id}>
                                    <NavLink to={`/products/${id}`}>
                                        <StyledImg
                                            src={images[0]}
                                            alt={brand}
                                        />
                                        <StyledParagraph>
                                            {brand}
                                        </StyledParagraph>
                                    </NavLink>
                                </SwiperSlide>
                            ),
                        )}
                </Swiper>
            </Container>
        )
    },
)
