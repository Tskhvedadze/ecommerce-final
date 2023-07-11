import { Navigation } from 'swiper'
import { StyledSwiper, StyledSlider } from './ProductCardSlider.styled'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const ProductCardSlider = ({
  img,
  brand,
}: {
  img: string[]
  brand: string
}) => {
  return (
    <StyledSwiper slidesPerView={1} navigation modules={[Navigation]}>
      {img?.map((src, i) => (
        <StyledSlider key={i}>
          <LazyLoadImage
            className='h-[200px]'
            src={src}
            alt={brand}
            effect='blur'
            placeholderSrc={src}
          />
        </StyledSlider>
      ))}
    </StyledSwiper>
  )
}
