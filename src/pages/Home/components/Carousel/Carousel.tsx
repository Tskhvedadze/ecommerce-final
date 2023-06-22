import {
  IconButton,
  Carousel as TailwindCarousel,
} from '@material-tailwind/react'

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline'
import { CarouselImage } from './Carousel.styled'

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
    <TailwindCarousel
      autoplay
      loop={true}
      draggable={true}
      transition={{ duration: 2 }}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className='absolute bottom-3 left-2/4 z-40 flex -translate-x-2/4 gap-3'>
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-1.5 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i
                  ? ' bg-amazonclone-yellow w-8'
                  : ' bg-amazonclone-yellow/50 w-4'
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant='text'
          color='orange'
          size='lg'
          onClick={handlePrev}
          className='!absolute top-2/4 -translate-y-2/4 left-4'
        >
          <ChevronDoubleLeftIcon strokeWidth={1} className='w-14 h-14' />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant='text'
          color='orange'
          size='lg'
          onClick={handleNext}
          className='!absolute top-2/4 -translate-y-2/4 !right-4'
        >
          <ChevronDoubleRightIcon strokeWidth={1} className='w-14 h-14' />
        </IconButton>
      )}
    >
      {banners.map((banner, index) => (
        <div key={index}>
          <CarouselImage src={banner} alt='banner' />
        </div>
      ))}
    </TailwindCarousel>
  )
}
