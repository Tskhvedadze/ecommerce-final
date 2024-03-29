import { Swiper, SwiperSlide } from 'swiper/react'

import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledSwiper = styled(Swiper)`
    position: relative;

    .swiper-button-prev,
    .swiper-button-next {
        ${tw`absolute bg-orange-300 cursor-pointer z-10 [border-radius: 50%] w-[45px] h-[45px] shadow-sm  transform -translate-y-1/2 top-[60%]`}
    }

    .swiper-button-prev {
        left: 0;
    }

    .swiper-button-next {
        right: 0;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
        content: '';
        ${tw`block absolute top-[50%] left-[50%] w-[15px] h-[15px] border-t-0 border-r-2 border-b-2 border-l-0 border-black  inset-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
    }

    .swiper-button-prev::after {
        transform: translate(-30%, -50%) rotate(135deg);
    }

    .swiper-button-next::after {
        transform: translate(-72%, -50%) rotate(-45deg);
    }

    .swiper-button-prev:hover,
    .swiper-button-next:hover {
        ${tw`hover:bg-orange-200`}
    }
`

export const StyledSlider = styled(SwiperSlide)`
    ${tw`flex justify-center `}
`
