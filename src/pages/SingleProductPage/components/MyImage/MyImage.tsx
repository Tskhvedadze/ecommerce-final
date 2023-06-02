import { useEffect, useState } from 'react'

import {
    InnerFlexContainer,
    MainFlexContainer,
    StyledPrimaryImage,
    StyledSecondaryImage,
} from './MyImage.styled'

type MyImageProps = {
    images: string[]
    thumbnail: string
    brand: string
}

export const MyImage = ({ images, brand, thumbnail }: MyImageProps) => {
    const [mainImage, setMainImage] = useState<string>(thumbnail)

    useEffect(() => {
        setMainImage(thumbnail)
    }, [thumbnail])

    return (
        <MainFlexContainer>
            <StyledPrimaryImage src={mainImage} alt={brand} />
            <InnerFlexContainer>
                {images.map((curEl, index) => (
                    <StyledSecondaryImage
                        src={curEl}
                        alt={brand}
                        key={`${curEl}-${index}`}
                        onClick={() => setMainImage(curEl)}
                    />
                ))}
            </InnerFlexContainer>
        </MainFlexContainer>
    )
}
