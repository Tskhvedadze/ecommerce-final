import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Button, ProductCard } from 'components'

import { useHomeProducts } from './hook'
import { TProducts } from 'types/productsAPI.types'
import { Carousel, TopProducts } from './components'

import {
    ProductPageTitle,
    ProductPageHeaderContainer,
    ProductCardGridContainer,
    TopProductsTitle,
    StyledAntdPagination,
} from './HomePage.styled'

const HomePage = () => {
    const navigate = useNavigate()
    const { t } = useTranslation(['HomePage'])
    const { data, handlePageClick, currentPage, itemsPerPage } =
        useHomeProducts()

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
                {data?.products.map((product: TProducts) =>
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

export default HomePage
