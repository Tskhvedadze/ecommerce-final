import { useTranslation } from 'react-i18next'
import { useSearchBarContext } from 'context'
import { formatCurrency } from 'utils'

import {
    FlexContainer,
    StyledImage,
    StyledTitle,
    StyledPrice,
} from './SearchResult.styled'

type SearchResultProps = {
    id: number
    brand: string
    price: number
    images: string
}

export const SearchResult = ({
    id,
    brand,
    images,
    price,
}: SearchResultProps) => {
    const { t } = useTranslation(['components'])
    const { setIsFocused } = useSearchBarContext()

    return (
        <FlexContainer
            to={`/products/${id}`}
            onClick={() => setIsFocused(false)}
        >
            <StyledImage src={images} alt={brand} />
            <StyledTitle>{brand}</StyledTitle>
            <StyledPrice>{formatCurrency(price, t('currency'))}</StyledPrice>
        </FlexContainer>
    )
}
