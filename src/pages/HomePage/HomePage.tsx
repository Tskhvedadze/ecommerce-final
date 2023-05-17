/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router'
import { useQuery } from 'react-query'

import { Spin } from 'antd'

import { ProductsProps } from 'types/productsAPI.types'
import API from 'utils/api/api'

import { Pagination } from './components/Pagination'
import { Carousel } from './components/Carousel'

import {
    Card,
    SuggestionCarousel,
    Button,
    MainContainer,
    GridContainer,
} from 'components'

import {
    ProductPageTitle,
    ProductPageHeaderContainer,
    LoadingDiv,
} from './HomePage.styled'

const fetchProducts = async (skip: number) => {
    const res = await API.get(
        `?limit=10&skip=${skip}&select=title,price,images`,
    )
    return res.data
}

const HomePage = () => {
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const itemsPerPage = 10
    const totalItems = 100

    const skip = useMemo(
        () => (currentPage - 1) * itemsPerPage,
        [currentPage, itemsPerPage],
    )

    const { data, isLoading } = useQuery(['products', skip], () =>
        fetchProducts(skip),
    )

    const productCard = useCallback(
        ({ id, images, price, title }: ProductsProps) => (
            <Card key={id} title={title} images={images} price={price} />
        ),
        [],
    )

    return (
        <MainContainer>
            <Carousel />
            <ProductPageHeaderContainer>
                <ProductPageTitle>Products</ProductPageTitle>
                <Button
                    mode='primary'
                    onClick={() => navigate('/all-products')}
                >
                    All
                </Button>
            </ProductPageHeaderContainer>

            {isLoading ? (
                <LoadingDiv>
                    <Spin size='large' />
                </LoadingDiv>
            ) : (
                <GridContainer>{data?.products.map(productCard)}</GridContainer>
            )}

            <Pagination
                totalItems={totalItems}
                setCurrentPage={setCurrentPage}
                itemsPerPage={itemsPerPage}
            />

            <SuggestionCarousel
                slidesPerView={7}
                spaceBetween={5}
                headerTitle={'Top Products'}
            />
        </MainContainer>
    )
}

export default HomePage
