import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

import img_0 from 'assets/images/category_0.jpg'
import img_1 from 'assets/images/category_1.jpg'
import img_2 from 'assets/images/category_2.jpg'
import img_3 from 'assets/images/category_3.jpg'
import img_4 from 'assets/images/category_4.jpg'
import img_5 from 'assets/images/category_5.jpg'

import { SCarouselDiv, SShopByCategory } from './CarouselCategory.styled'

export const CarouselCategory = () => {
    return (
        <SCarouselDiv>
            <SShopByCategory>Shop by Category</SShopByCategory>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <img src={img_0} alt={'category_0'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img_1} alt={'category_1'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img_2} alt={'category_2'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img_3} alt={'category_3'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img_4} alt={'category_4'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img_5} alt={'category_5'} />
                </SwiperSlide>
            </Swiper>
        </SCarouselDiv>
    )
}
