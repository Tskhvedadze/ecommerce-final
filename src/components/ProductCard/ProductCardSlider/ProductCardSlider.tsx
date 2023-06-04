import { Navigation } from 'swiper'
import { StyledSwiper, StyledSlider } from './ProductCardSlider.styled'

export const ProductCardSlider = ({
    img,
    brand,
}: {
    img: string[]
    brand: string
}) => {
    return (
        <StyledSwiper slidesPerView={1} navigation modules={[Navigation]}>
            {img.map((src, i) => (
                <StyledSlider key={i}>
                    <img className='h-[200px]' src={src} alt={brand} />
                </StyledSlider>
            ))}
        </StyledSwiper>
    )
}
