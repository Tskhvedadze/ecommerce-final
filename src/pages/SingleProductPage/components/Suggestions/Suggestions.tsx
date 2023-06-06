import { ProductCard } from 'components/index'
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'

import { apiClient2 } from 'config/api/api'
import { TProducts } from 'types/productsAPI.types'

import {
    MainFlexContainer,
    StyledHr,
    SuggestionGridContainer,
    SuggestionTitle,
    ErrorText,
} from './Suggestions.styled'

type SuggestionsProps = {
    category: string
}

export const Suggestions = ({ category }: SuggestionsProps) => {
    const { t } = useTranslation(['components'])
    const {
        status,
        data,
        error,
        isError,
    }: { status: string; data: any; error: any; isError: boolean } = useQuery(
        ['suggestionProducts', category],
        async () => {
            const res = await apiClient2.get(`/products/category/${category}`)
            return res?.data
        },
    )

    if (status === 'error' && isError)
        return <ErrorText>An Error: {error.message}</ErrorText>

    return (
        <MainFlexContainer>
            <StyledHr />
            <SuggestionTitle>{t('Related')}</SuggestionTitle>
            <SuggestionGridContainer>
                {!isError &&
                    data?.products.map((item: TProducts) => (
                        <ProductCard key={item.id} {...item} />
                    ))}
            </SuggestionGridContainer>
        </MainFlexContainer>
    )
}
