import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'
import { Breadcrumb, Pagination } from 'antd'

import { public_axios } from 'utils'
import { TProducts } from 'types/productsAPI.types'
import { ErrorMsg, ProductCard } from 'components'

import {
    MainFlexContainer,
    InnerHeaderFlexContainer,
    SearchResultTitle,
    SearchResultParagraph,
    SearchedProductsGridContainer,
} from './Search.styled'
import { useCallback, useState } from 'react'

const getData = async (keyword: string, page: number, skip: number) => {
    const res = await public_axios.post('/products', {
        keyword: keyword,
        page_size: page,
        page_number: skip,
    })
    return res?.data
}

function Search() {
    const { t } = useTranslation(['search'])
    const { keyword } = useParams()
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 20
    const skip = (currentPage - 1) * itemsPerPage
    const keywordValue = keyword ?? ''

    const {
        status,
        data,
        error,
        isError,
    }: {
        status: string
        data: any
        error: any
        isError: boolean
    } = useQuery(
        ['searchResult', keyword, currentPage, skip],
        () => getData(keywordValue, itemsPerPage, skip),
        {
            keepPreviousData: false,
        },
    )

    const handlePageClick = useCallback((page: number) => {
        setCurrentPage(page)
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
                        {t('found')} {data?.products.length} {t('product')}
                        <span>{keyword}</span>
                    </SearchResultParagraph>
                </div>
                <Breadcrumb separator='>' items={breadcrumbItems} />
            </InnerHeaderFlexContainer>
            <SearchedProductsGridContainer>
                {!isError &&
                    data?.products.map(
                        ({ id, price, brand, images, title }: TProducts) => (
                            <ProductCard
                                key={id}
                                id={id}
                                brand={brand}
                                images={images}
                                price={price}
                                title={title}
                            />
                        ),
                    )}
            </SearchedProductsGridContainer>
            <div className='flex justify-center mb-6 mt-4 border-b pb-3'>
                <Pagination
                    showSizeChanger={false}
                    showQuickJumper
                    current={currentPage}
                    defaultPageSize={itemsPerPage}
                    total={data?.total_found}
                    onChange={handlePageClick}
                />
            </div>
        </MainFlexContainer>
    )
}

export default Search
