import { Swiper } from 'swiper/react'

import styled from 'styled-components'
import tw from 'twin.macro'

export const SDiv = styled.div`
    ${tw`mt-3 mb-3`}
`

export const SCarouselSwiper = styled(Swiper)`
    position: relative;

    .swiper-button-prev,
    .swiper-button-next {
        ${tw`absolute  cursor-pointer z-10 border-2 border-gray-500 [border-radius: 20%] w-[45px] h-[45px]   transform -translate-y-1/2 top-[60%]`}
    }

    .swiper-button-prev {
        left: 20px;
    }

    .swiper-button-next {
        right: 20px;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
        content: '';
        ${tw`block absolute top-[50%] left-[50%] w-[18px] h-[18px] border-t-0 border-r-2 border-b-2 border-l-0 border-gray-500  inset-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
    }

    .swiper-button-prev::after {
        transform: translate(-30%, -50%) rotate(135deg);
    }

    .swiper-button-next::after {
        transform: translate(-75%, -50%) rotate(-45deg);
    }

    .swiper-button-prev:hover,
    .swiper-button-next:hover {
        ${tw`hover:bg-gray-300 `}
        color:black
    }
`
