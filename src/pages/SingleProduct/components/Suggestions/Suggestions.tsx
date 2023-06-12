import { useQuery } from 'react-query'
import { public_axios } from 'utils'
import { Spin } from 'antd'
import { useTranslation } from 'react-i18next'
import { TProducts } from 'types/productsAPI.types'

import { Button, ProductCard } from 'components'

import {
    MainFlexContainer,
    StyledHr,
    SuggestionGridContainer,
    SuggestionTitle,
    ErrorText,
    BtnContainer,
    Loading,
} from './Suggestions.styled'
import { useState } from 'react'

type SuggestionsProps = {
    brand: string
}

export const Suggestions = ({ brand }: SuggestionsProps) => {
    const { t } = useTranslation(['components'])
    const [page, setPage] = useState(0)

    const { status, data, error, isError, isLoading } = useQuery(
        ['suggestionProducts', brand, page],
        async () => {
            const res = await public_axios.post('/products', {
                keyword: brand,
                page_size: 4,
                page_number: page,
            })
            return res?.data
        },
        {
            useErrorBoundary: (error: any) => error.response?.status >= 500,
            suspense: false,
        },
    )

    if (status === 'error' && isError)
        return <ErrorText>An Error: {error?.message}</ErrorText>

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 5)
    }

    const handlePreviousPage = () => {
        if (page > 0) {
            setPage((prevPage) => prevPage - 5)
        }
    }

    const total = data?.total_found - page

    return (
        <MainFlexContainer>
            {data?.total_found !== 0 && (
                <>
                    <StyledHr />
                    <BtnContainer>
                        <SuggestionTitle>{t('Related')}</SuggestionTitle>
                        <SuggestionTitle>
                            <Button
                                mode='suggestion'
                                onClick={handlePreviousPage}
                                disabled={page === 0}
                            >
                                {t('prev')}
                            </Button>
                            <Button
                                mode='suggestion'
                                onClick={handleNextPage}
                                disabled={total <= 8}
                            >
                                {t('next')}
                            </Button>
                        </SuggestionTitle>
                    </BtnContainer>
                    {!isLoading ? (
                        <SuggestionGridContainer>
                            {data?.products.map((item: TProducts) => (
                                <ProductCard key={item.id} {...item} />
                            ))}
                        </SuggestionGridContainer>
                    ) : (
                        <Loading>
                            <Spin size='large' />
                        </Loading>
                    )}
                </>
            )}
        </MainFlexContainer>
    )
}
