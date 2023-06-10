import { useCallback, useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { apiClient2 } from 'config/api/api'
import { TProducts } from 'types/productsAPI.types'

import { Button, ErrorMsg, ProductCard } from 'components'
import { Carousel, TopProducts } from './components'

import {
    ProductPageTitle,
    ProductPageHeaderContainer,
    ProductCardGridContainer,
    TopProductsTitle,
    StyledAntdPagination,
} from './Homestyled'

function Home() {
    const navigate = useNavigate()
    const { t } = useTranslation(['HomePage'])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const itemsPerPage = 15
    const skip = (currentPage - 1) * itemsPerPage

    const {
        status,
        data,
        error,
        isError,
    }: { status: string; data: any; error: any; isError: boolean } = useQuery(
        ['homeProducts', currentPage, skip],
        async () => {
            const res = await apiClient2.get(
                `/products?limit=${itemsPerPage}&skip=${skip}&select=title,price,images,brand,rating`,
            )
            return res?.data
        },
        {
            keepPreviousData: true,
        },
    )

    const handlePageClick = useCallback((page: number) => {
        setCurrentPage(page)
    }, [])

    const productCard = useCallback(
        ({ id, images, price, brand, title, rating }: TProducts) => (
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
        [],
    )

    if (status === 'error' && isError)
        return <ErrorMsg errorText={error.message} />

    return (
        <>
            <Carousel />
            <ProductPageHeaderContainer>
                <ProductPageTitle>{t('Products')}</ProductPageTitle>
                <Button mode='primary' onClick={() => navigate('/products')}>
                    {t('All')}
                </Button>
            </ProductPageHeaderContainer>

            <ProductCardGridContainer>
                {!isError &&
                    data?.products.map((product: TProducts) =>
                        productCard(product),
                    )}
            </ProductCardGridContainer>

            <StyledAntdPagination
                showSizeChanger={false}
                showQuickJumper
                current={currentPage}
                defaultPageSize={itemsPerPage}
                total={data?.total}
                onChange={handlePageClick}
            />
            <TopProductsTitle>{t('Top_Products')}</TopProductsTitle>
            <TopProducts slidesPerView={5} spaceBetween={1} />
        </>
    )
}

export default Home
