import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'

import { SDiv, SGradient } from './Carousel.styled'

import 'swiper/css'
import 'swiper/css/navigation'

export const Carousel = () => {
    return (
        <SDiv>
            <Swiper
                loop={true}
                spaceBetween={0}
                className='h-[50%]'
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 4500,
                }}
                navigation={true}
            >
                <SwiperSlide>
                    <img src='/images/carousel_1.jpg' alt='carousel_1' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/carousel_2.jpg' alt='carousel_2' />
                </SwiperSlide>
                <SwiperSlide className='bg-black'>
                    <video controls muted>
                        <source
                            src='/images/carousel_vid.mp4'
                            type='video/mp4'
                        />
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/carousel_4.jpg' alt='carousel_4' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/images/carousel_5.jpg' alt='carousel_5' />
                </SwiperSlide>
            </Swiper>
            <SGradient />
        </SDiv>
    )
}
