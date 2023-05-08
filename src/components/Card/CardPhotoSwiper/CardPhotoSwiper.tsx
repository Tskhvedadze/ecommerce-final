import { SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import { SImageDiv, StyledSwiper } from './CardPhotoSwiper.styled'

type CardPhotoSwiperProps = {
    images: string[]
}

export const CardPhotoSwiper = ({ images }: CardPhotoSwiperProps) => {
    return (
        <StyledSwiper slidesPerView={1} navigation modules={[Navigation]}>
            {images.map((src, i) => (
                <SwiperSlide key={i}>
                    <SImageDiv imageUrl={src} />
                </SwiperSlide>
            ))}
        </StyledSwiper>
    )
}
