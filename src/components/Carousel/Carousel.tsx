import { SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'

import { SDiv, SCarouselSwiper, SImg } from './Carousel.styled'

import banner_1 from 'assets/images/bannerImgOne.jpg'
import banner_2 from 'assets/images/bannerImgTwo.jpg'
import banner_3 from 'assets/images/bannerImgThree.jpg'
import banner_4 from 'assets/images/bannerImgFour.jpg'
import banner_5 from 'assets/images/bannerImgFive.jpg'
import banner_6 from 'assets/images/Banner_1.jpg'
import banner_7 from 'assets/images/Banner_2.jpg'
import banner_8 from 'assets/images/Banner_4.jpg'
import banner_9 from 'assets/images/Banner_5.jpg'
import banner_10 from 'assets/images/Banner_6.jpg'

export const Carousel = () => {
    return (
        <SDiv>
            <SCarouselSwiper
                loop={true}
                spaceBetween={0}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 4000,
                }}
                navigation={true}
            >
                <SwiperSlide>
                    <SImg src={banner_1} alt='banner' />
                </SwiperSlide>
                <SwiperSlide>
                    <SImg src={banner_2} alt='banner' />
                </SwiperSlide>
                <SwiperSlide>
                    <SImg src={banner_3} alt='banner' />
                </SwiperSlide>
                <SwiperSlide>
                    <SImg src={banner_4} alt='banner' />
                </SwiperSlide>
                <SwiperSlide>
                    <SImg src={banner_5} alt='banner' />
                </SwiperSlide>
                <SwiperSlide>
                    <SImg src={banner_6} alt='banner' />
                </SwiperSlide>
                <SwiperSlide>
                    <SImg src={banner_7} alt='banner' />
                </SwiperSlide>
                <SwiperSlide>
                    <SImg src={banner_8} alt='banner' />
                </SwiperSlide>
                <SwiperSlide>
                    <SImg src={banner_9} alt='banner' />
                </SwiperSlide>
                <SwiperSlide>
                    <SImg src={banner_10} alt='banner' />
                </SwiperSlide>
            </SCarouselSwiper>
        </SDiv>
    )
}
