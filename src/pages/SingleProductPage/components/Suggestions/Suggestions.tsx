import { ProductCard } from 'components/index'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'

import { apiClient2 } from 'utils'
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
    const getSuggestions = async () => {
        const response = await apiClient2.get(`/products/category/${category}`)
        return response?.data
    }
    const { data, refetch } = useQuery(['suggestions'], getSuggestions)

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
