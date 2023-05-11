import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'

import { SDiv } from './Carousel.styled'

import carousel_1 from 'assets/images/carousel_1.jpg'
import carousel_2 from 'assets/images/carousel_2.jpg'
import carousel_4 from 'assets/images/carousel_4.jpg'
import carousel_5 from 'assets/images/carousel_5.jpg'

export const Carousel = () => {
    return (
        <SDiv>
            <Swiper
                loop={true}
                spaceBetween={0}
                className='h-[325px]'
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 4000,
                }}
                navigation={true}
            >
                <SwiperSlide>
                    <img
                        src={carousel_1}
                        alt='carousel_1'
                        className='h-[400px] w-[100%]'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={carousel_2}
                        alt='carousel_2'
                        className='h-[100%] w-[100%]'
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src={carousel_4}
                        alt='carousel_4'
                        className='h-[100%] w-[100%]'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={carousel_5}
                        alt='carousel_5'
                        className='h-[100%] w-[100%]'
                    />
                </SwiperSlide>
            </Swiper>
        </SDiv>
    )
}
