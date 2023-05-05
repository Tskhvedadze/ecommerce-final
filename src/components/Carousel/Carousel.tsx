import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'

import { SDiv, SGradient } from './Carousel.styled'

import 'swiper/css'
import 'swiper/css/navigation'

const carousel_1 = require('../../assets/images/carousel_1.jpg')
const carousel_2 = require('../../assets/images/carousel_2.jpg')
const carousel_3_vid = require('../../assets/images/carousel_vid.mp4')
const carousel_4 = require('../../assets/images/carousel_4.jpg')
const carousel_5 = require('../../assets/images/carousel_5.jpg')

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
                    <img src={carousel_1} alt='carousel_1' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={carousel_2} alt='carousel_2' />
                </SwiperSlide>
                <SwiperSlide className='bg-black'>
                    <video controls muted>
                        <source src={carousel_3_vid} type='video/mp4' />
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={carousel_4} alt='carousel_4' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={carousel_5} alt='carousel_5' />
                </SwiperSlide>
            </Swiper>
            <SGradient />
        </SDiv>
    )
}
