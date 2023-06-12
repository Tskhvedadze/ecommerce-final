import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'

import { public_axios } from 'utils'
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
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 15
    const skip = (currentPage - 1) * itemsPerPage

    const { status, data, error, isError } = useQuery({
        queryKey: ['homeProducts', currentPage, skip],
        queryFn: async () => {
            const res = await public_axios.post('/products', {
                page_size: itemsPerPage,
                page_number: skip,
            })
            return res?.data
        },
        useErrorBoundary: (error: any) => error.response?.status >= 500,
    })

    const handlePageClick = useCallback((page: number) => {
        setCurrentPage(page)
    }, [])

    const productCard = useCallback(
        ({ id, images, price, brand, title }: TProducts) => (
            <ProductCard
                key={id}
                id={id}
                brand={brand}
                images={images}
                price={price}
                title={title}
            />
        ),
        [],
    )

    if (status === 'error' && isError)
        return <ErrorMsg errorText={error?.message} />

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
                total={data?.total_found}
                onChange={handlePageClick}
            />

            <TopProductsTitle>{t('Top_Products')}</TopProductsTitle>
            <TopProducts slidesPerView={5} spaceBetween={1} />
        </>
    )
}

export default Home
