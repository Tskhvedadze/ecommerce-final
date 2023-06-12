import { useParams } from 'react-router-dom'
import { useInfiniteQuery } from 'react-query'
import InfiniteScroll from 'react-infinite-scroll-component'
import { animateScroll } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import { Breadcrumb } from 'antd'

import { public_axios } from 'utils'
import { TProducts } from 'types/productsAPI.types'
import { Button, ErrorMsg, ProductCard } from 'components'

import { ReactComponent as UpArrow } from 'assets/images/chevronDoubleUp.svg'

import {
    MainFlexContainer,
    InnerHeaderFlexContainer,
    SearchResultTitle,
    SearchResultParagraph,
    SearchedProductsGridContainer,
    NoMoreResult,
    Loading,
} from './Search.styled'

function Search() {
    const { t } = useTranslation(['search'])
    const { keyword } = useParams()

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isSuccess,
        status,
        error,
        isError,
    } = useInfiniteQuery({
        queryKey: ['searchResults', keyword],
        queryFn: async ({ pageParam = 0 }) => {
            const res = await public_axios.post('/products', {
                keyword: keyword,
                page_size: 10,
                page_number: pageParam,
            })
            return { ...res?.data, prevOffset: pageParam }
        },
        useErrorBoundary: (error: any) => error.response?.status >= 500,
        getNextPageParam: (lastPage) => {
            if (lastPage.prevOffset + 10 > lastPage?.total_found) {
                return false
            }
            return lastPage.prevOffset + 10
        },
    })

    const products = data?.pages.reduce((acc, page) => {
        return [...acc, page.products]
    }, [])

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

    if (status === 'error' && isError) {
        return <ErrorMsg key='errorMsg' errorText={error.message} />
    }

    return (
        <MainFlexContainer>
            <InnerHeaderFlexContainer>
                <div>
                    <SearchResultTitle>{t('search')}</SearchResultTitle>
                    <SearchResultParagraph>
                        {t('found')} {products[0].length} {t('product')}
                        <span>{keyword}</span>
                    </SearchResultParagraph>
                </div>
                <Breadcrumb separator='>' items={breadcrumbItems} />
            </InnerHeaderFlexContainer>
            <InfiniteScroll
                dataLength={products ? products.length : 0}
                next={() => fetchNextPage()}
                hasMore={hasNextPage ?? false}
                loader={<Loading>{t('loading')}</Loading>}
                endMessage={<NoMoreResult>{t('nomore')}</NoMoreResult>}
            >
                <SearchedProductsGridContainer>
                    {isSuccess &&
                        data?.pages?.map((page) =>
                            page.products.map(
                                ({
                                    id,
                                    price,
                                    brand,
                                    images,
                                    title,
                                }: TProducts) => (
                                    <ProductCard
                                        key={id}
                                        id={id}
                                        brand={brand}
                                        images={images}
                                        price={price}
                                        title={title}
                                    />
                                ),
                            ),
                        )}
                </SearchedProductsGridContainer>
            </InfiniteScroll>
            <Button
                mode='searchResult'
                onClick={() => {
                    animateScroll.scrollToTop({
                        duration: 1000,
                        delay: 100,
                        smooth: true,
                    })
                }}
            >
                <UpArrow />
            </Button>
        </MainFlexContainer>
    )
}

export default Search
