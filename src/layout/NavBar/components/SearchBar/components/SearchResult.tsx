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
    title: string
    price: number
    images: string
}

export const SearchResult = ({
    id,
    title,
    images,
    price,
}: SearchResultProps) => {
    const { t } = useTranslation(['components'])
    const { setText, setIsFocused } = useSearchBarContext()

    const handleClick = () => {
        setText('')
        setIsFocused(false)
    }

    return (
        <FlexContainer to={`/products/${id}`} onClick={handleClick}>
            <StyledImage src={images} alt={title} />
            <StyledTitle>{title}</StyledTitle>
            <StyledPrice>{formatCurrency(price, t('currency'))}</StyledPrice>
        </FlexContainer>
    )
}
