import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'
import { Breadcrumb } from 'antd'

import { apiClient2 } from 'config/api/api'
import { TProducts } from 'types/productsAPI.types'
import { ErrorMsg, ProductCard } from 'components'

import {
    MainFlexContainer,
    InnerHeaderFlexContainer,
    SearchResultTitle,
    SearchResultParagraph,
    SearchedProductsGridContainer,
} from './SearchPage.styled'

function SearchPage() {
    const { t } = useTranslation(['search'])
    const { keyword } = useParams()

    const {
        status,
        data,
        error,
        isError,
    }: { status: string; data: any; error: any; isError: boolean } = useQuery(
        ['searchResult', keyword],
        async () => {
            const res = await apiClient2.get(`products/search?q=${keyword}`)
            return res?.data
        },
    )

    const breadcrumbItems = [
        {
            className: 'text-gray-700 font-semibold',
            title: `${t('home')}`,
            href: '/',
        },
        {
            className: 'text-orange',
            title: keyword,
        },
    ]

    if (status === 'error' && isError)
        return <ErrorMsg errorText={error.message} />

    return (
        <MainFlexContainer>
            <InnerHeaderFlexContainer>
                <div>
                    <SearchResultTitle>{t('search')}</SearchResultTitle>
                    <SearchResultParagraph>
                        {t('found')} {data?.products.length} {t('product')}
                        <span>{keyword}</span>
                    </SearchResultParagraph>
                </div>
                <Breadcrumb separator='>' items={breadcrumbItems} />
            </InnerHeaderFlexContainer>
            <SearchedProductsGridContainer>
                {!isError &&
                    data?.products.map(
                        ({
                            id,
                            price,
                            brand,
                            images,
                            title,
                            rating,
                        }: TProducts) => (
                            <ProductCard
                                key={id}
                                id={id}
                                brand={brand}
                                images={images}
                                price={price}
                                title={title}
                                rating={rating}
                            />
                        ),
                    )}
            </SearchedProductsGridContainer>
        </MainFlexContainer>
    )
}

export default SearchPage
