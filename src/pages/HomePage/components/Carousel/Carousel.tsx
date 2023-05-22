import { SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'

import { CarouselSwiper, CarouselImage } from './Carousel.styled'

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

const banners = [
    banner_1,
    banner_2,
    banner_3,
    banner_4,
    banner_5,
    banner_6,
    banner_7,
    banner_8,
    banner_9,
    banner_10,
]

export const Carousel = () => {
    return (
        <CarouselSwiper
            loop={true}
            spaceBetween={0}
            modules={[Navigation, Autoplay]}
            autoplay={{
                delay: 4000,
            }}
            navigation={true}
        >
            {banners.map((banner, index) => (
                <SwiperSlide key={index}>
                    <CarouselImage src={banner} alt='banner' />
                </SwiperSlide>
            ))}
        </CarouselSwiper>
    )
}
