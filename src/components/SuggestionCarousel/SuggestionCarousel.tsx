import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import { TProducts } from 'types/productsAPI.types'
import { Container, StyledSpin } from './SuggestionCarousel.styled'
import { getAllProducts } from 'utils'
import { useQuery } from 'react-query'

type CarouselProductProps = {
    slidesPerView: number
    spaceBetween: number
    itemsPerPage: number
    page_number: number
    keyword?: string
}

export const SuggestionCarousel = React.memo(
    ({
        slidesPerView,
        spaceBetween,
        itemsPerPage,
        page_number,
        keyword,
    }: CarouselProductProps) => {
        const queryKey = ['products', keyword, page_number]
        const { isLoading, data, refetch } = useQuery(queryKey, () =>
            getAllProducts(itemsPerPage, page_number, keyword),
        )

        useEffect(() => {
            refetch()
        }, [keyword, refetch])

        return (
            <Container>
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={spaceBetween}
                    navigation={true}
                    modules={[Navigation]}
                >
                    {isLoading ? (
                        <StyledSpin size='large' />
                    ) : (
                        data?.products.map(
                            ({ id, brand, images }: TProducts) => (
                                <SwiperSlide key={id}>
                                    <NavLink to={`/product/${id}`}>
                                        <img
                                            className='h-[150px] w-[200px] border rounded-lg mt-3'
                                            src={images[0]}
                                            alt={brand}
                                        />
                                    </NavLink>
                                </SwiperSlide>
                            ),
                        )
                    )}
                </Swiper>
            </Container>
        )
    },
)
