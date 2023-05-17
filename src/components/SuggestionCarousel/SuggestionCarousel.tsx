/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import { useAxiosFetch } from 'hooks'

import { ProductsProps } from 'types/productsAPI.types'

import { Container, Header, LoadingDiv } from './SuggestionCarousel.styled'

type CarouselProductProps = {
    headerTitle: string
    slidesPerView: number
    spaceBetween: number
    category?: string
}

export const SuggestionCarousel = ({
    headerTitle,
    slidesPerView,
    spaceBetween,
    category,
}: CarouselProductProps) => {
    const fetchParams = category
        ? { endPoint: `/category/${category}` }
        : { endPoint: `?limit=40&select=thumbnail,brand,title` }

    const { data, loading, fetchData } = useAxiosFetch(fetchParams)

    useEffect(() => {
        fetchData()
    }, [category])

    return (
        <Container>
            <Header>{headerTitle}</Header>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                navigation={true}
                modules={[Navigation]}
            >
                {loading ? (
                    <LoadingDiv>Loading...</LoadingDiv>
                ) : (
                    data?.products.map(
                        ({ id, brand, thumbnail, title }: ProductsProps) => (
                            <SwiperSlide key={id}>
                                <img
                                    className='h-[150px] w-[200px] border rounded-lg'
                                    src={thumbnail}
                                    alt={brand}
                                />
                                <p>{title}</p>
                            </SwiperSlide>
                        ),
                    )
                )}
            </Swiper>
        </Container>
    )
}
