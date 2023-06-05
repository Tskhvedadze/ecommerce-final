import { Breadcrumb } from 'antd'
import { ProductCard } from 'components'
import { useFetch } from 'hook'
import { useParams } from 'react-router-dom'
import { TProducts } from 'types/productsAPI.types'

import {
    MainFlexContainer,
    InnerHeaderFlexContainer,
    SearchResultTitle,
    SearchResultParagraph,
    SearchedProductsGridContainer,
} from './SearchPage.styled'

function SearchPage() {
    const { keyword } = useParams()
    const { data } = useFetch({
        url: `products/search?q=${keyword}`,
        caching: ['searchResult'],
    })

    const breadcrumbItems = [
        {
            className: 'text-gray-700 font-semibold',
            title: 'Home',
            href: '/',
        },
        {
            className: 'text-orange',
            title: keyword,
        },
    ]

    return (
        <MainFlexContainer>
            <InnerHeaderFlexContainer>
                <div>
                    <SearchResultTitle>Search results</SearchResultTitle>
                    <SearchResultParagraph>
                        We found {data?.products.length} Product for{' '}
                        <span>{keyword}</span>
                    </SearchResultParagraph>
                </div>
                <Breadcrumb separator='>' items={breadcrumbItems} />
            </InnerHeaderFlexContainer>
            <SearchedProductsGridContainer>
                {data?.products.map(
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
