/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import Rating from 'react-star-rate'

// Custom Hooks
import { useAxiosFetch } from 'hooks'
import { useResponsive } from './hook'

import { ProductsProps } from 'types/productsAPI.types'

import {
    SDivContainer,
    SDivHeader,
    SRatingContainer,
    SLoadingDiv,
} from './CarouselProduct.styled'

type CarouselProductProps = {
    headerTitle: string
}

export const CarouselProduct = ({ headerTitle }: CarouselProductProps) => {
    const { slidesPerView } = useResponsive()
    const { data, loading, fetchData } = useAxiosFetch({
        endPoint: `?limit=100&select=thumbnail,brand,rating`,
    })

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <SDivContainer>
            <SDivHeader>{headerTitle}</SDivHeader>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={5}
                navigation={true}
                modules={[Navigation]}
            >
                {loading ? (
                    <SLoadingDiv>Loading...</SLoadingDiv>
                ) : (
                    data?.products.map(
                        ({ id, brand, thumbnail, rating }: ProductsProps) =>
                            rating > 4.6 && (
                                <SwiperSlide key={id}>
                                    <img
                                        className='h-[150px] w-[200px] border rounded-lg'
                                        src={thumbnail}
                                        alt={brand}
                                    />
                                    <SRatingContainer>
                                        <Rating value={rating} disabled />
                                        <span>{rating}</span>
                                    </SRatingContainer>
                                </SwiperSlide>
                            ),
                    )
                )}
            </Swiper>
        </SDivContainer>
    )
}
