import { SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import { SlideImage, StyledSwiper } from './CardPhotoSwiper.styled'

type CardPhotoSwiperProps = {
    images: string[]
}

export const CardPhotoSwiper = ({ images }: CardPhotoSwiperProps) => {
    return (
        <StyledSwiper slidesPerView={1} navigation modules={[Navigation]}>
            {images.map((src, i) => (
                <SwiperSlide key={i}>
                    <SlideImage imageUrl={src} />
                </SwiperSlide>
            ))}
        </StyledSwiper>
    )
}
