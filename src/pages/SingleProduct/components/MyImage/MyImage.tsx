import { useState } from 'react'

import {
    InnerFlexContainer,
    MainFlexContainer,
    StyledPrimaryImage,
    StyledSecondaryImage,
} from './MyImage.styled'

type MyImageProps = {
    images: string[]
    brand: string
}

export const MyImage = ({ images, brand }: MyImageProps) => {
    const [mainImage, setMainImage] = useState<string>(images[0])

    return (
        <MainFlexContainer>
            <StyledPrimaryImage src={mainImage} alt={brand} />
            <InnerFlexContainer>
                {images?.map((curEl, index) => (
                    <StyledSecondaryImage
                        src={curEl}
                        alt={brand}
                        isSelected={curEl === mainImage}
                        key={`${curEl}-${index}`}
                        onClick={() => setMainImage(curEl)}
                    />
                ))}
            </InnerFlexContainer>
        </MainFlexContainer>
    )
}
