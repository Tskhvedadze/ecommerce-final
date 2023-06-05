import { ProductCard } from 'components/index'
import { useEffect } from 'react'
import { useFetch } from 'hook'
import { useTranslation } from 'react-i18next'

import { TProducts } from 'types/productsAPI.types'

import {
    MainFlexContainer,
    StyledHr,
    SuggestionGridContainer,
    SuggestionTitle,
} from './Suggestions.styled'

type SuggestionsProps = {
    category: string
}

export const Suggestions = ({ category }: SuggestionsProps) => {
    const { t } = useTranslation(['components'])
    const { data, refetch } = useFetch({
        url: `/products/category/${category}`,
        caching: ['suggestionProducts', category],
    })

    useEffect(() => {
        refetch()
    }, [category, refetch])

    return (
        <MainFlexContainer>
            <StyledHr />
            <SuggestionTitle>{t('Related')}</SuggestionTitle>
            <SuggestionGridContainer>
                {data?.products.map((item: TProducts) => (
                    <ProductCard key={item.id} {...item} />
                ))}
            </SuggestionGridContainer>
        </MainFlexContainer>
    )
}
