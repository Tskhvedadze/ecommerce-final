import { Navigation } from 'swiper'
import { StyledSwiper, StyledSlider } from './ProductCardSlider.styled'

export const ProductCardSlider = ({ img }: { img: string[] }) => {
    return (
        <StyledSwiper slidesPerView={1} navigation modules={[Navigation]}>
            {img.map((src, i) => (
                <StyledSlider key={i}>
                    <img width={230} height={230} src={src} alt={src} />
                </StyledSlider>
            ))}
        </StyledSwiper>
    )
}
