/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useAxiosFetch } from 'hooks'

import { ProductsProps } from 'types/productsAPI.types'

import { Pagination } from './components/Pagination'
import { Carousel } from './components/Carousel'

import {
    Card,
    SuggestionCarousel,
    Button,
    MainContainer,
    GridContainer,
} from 'components'

import { ProductPageTitle, ProductPageHeaderContainer } from './HomePage.styled'

const HomePage = () => {
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const itemsPerPage = 10
    const totalItems = 100
    const skip = (currentPage - 1) * itemsPerPage

    const { fetchData, data } = useAxiosFetch({
        endPoint: `?limit=${itemsPerPage}&skip=${skip}&select=title,price,images`,
    })

    useEffect(() => {
        fetchData()
    }, [skip])

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

            <GridContainer>
                {data?.products?.map(
                    ({ id, images, price, title }: ProductsProps) => {
                        return (
                            <Card
                                key={id}
                                title={title}
                                images={images}
                                price={price}
                            />
                        )
                    },
                )}
            </GridContainer>

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
