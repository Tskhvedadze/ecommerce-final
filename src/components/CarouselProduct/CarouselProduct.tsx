import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import { SDivContainer, SDivHeader } from './CarouselProduct.styled'

import 'swiper/css'
import 'swiper/css/navigation'

import CP_0 from 'assets/images/product_0_small.jpg'
import CP_1 from 'assets/images/product_1_small.jpg'
import CP_2 from 'assets/images/product_2_small.jpg'
import CP_3 from 'assets/images/product_3_small.jpg'
import CP_4 from 'assets/images/product_4_small.jpg'
import CP_5 from 'assets/images/product_5_small.jpg'
import CP_6 from 'assets/images/product_6_small.jpg'
import CP_7 from 'assets/images/product_7_small.jpg'
import CP_8 from 'assets/images/product_8_small.jpg'

const imagesArray = [CP_0, CP_1, CP_2, CP_3, CP_4, CP_5, CP_6, CP_7, CP_8]

type CarouselProductProps = {}

export const CarouselProduct = (props: CarouselProductProps) => {
    return (
        <SDivContainer>
            <SDivHeader>Best Sellers</SDivHeader>
            <Swiper
                slidesPerView={7}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
            >
                {imagesArray.map((source, i) => (
                    <SwiperSlide key={i}>
                        <img src={source} alt={source} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </SDivContainer>
    )
}
