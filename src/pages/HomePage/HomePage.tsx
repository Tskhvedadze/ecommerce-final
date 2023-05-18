import { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Spin } from 'antd'

import { TProducts } from 'types/productsAPI.types'
import { getAllProducts } from 'utils'

import { Carousel } from './components/Carousel'

import {
    Button,
    ProductCard,
    SuggestionCarousel,
    Pagination,
    MainContainer,
    GridContainer,
} from 'components'

import {
    ProductPageTitle,
    ProductPageHeaderContainer,
    LoadingDiv,
} from './HomePage.styled'

const HomePage = () => {
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState<number>(1)

    const itemsPerPage = 10
    const skip = (currentPage - 1) * itemsPerPage

    const { isLoading, data, refetch } = useQuery(
        ['products', currentPage],
        () => getAllProducts(itemsPerPage, skip),
        {
            keepPreviousData: true,
        },
    )

    useEffect(() => {
        refetch()
    }, [refetch])

    const productCard = useCallback(
        ({ id, images, price, brand }: TProducts) => (
            <ProductCard
                key={id}
                id={id}
                brand={brand}
                images={images}
                price={price}
            />
        ),
        [],
    )

    return (
        <MainContainer>
            <Carousel />
            <ProductPageHeaderContainer>
                <ProductPageTitle>Products</ProductPageTitle>
                <Button mode='primary' onClick={() => navigate('/products')}>
                    All
                </Button>
            </ProductPageHeaderContainer>

            {isLoading ? (
                <LoadingDiv>
                    <Spin size='large' />
                </LoadingDiv>
            ) : (
                <GridContainer>
                    {data?.products.map((product: TProducts) =>
                        productCard(product),
                    )}
                </GridContainer>
            )}

            <Pagination
                totalItems={data?.total_found}
                setCurrentPage={setCurrentPage}
                itemsPerPage={itemsPerPage}
            />

            <SuggestionCarousel
                itemsPerPage={50}
                page_number={1500}
                slidesPerView={7}
                spaceBetween={5}
                headerTitle={'Top Products'}
            />
        </MainContainer>
    )
}

export default HomePage
