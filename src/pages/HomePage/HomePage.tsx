import { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'

import { TProducts } from 'types/productsAPI.types'
import { getAllProducts } from 'utils'

import { Carousel } from './components/Carousel'

import { Button, ProductCard, SuggestionCarousel, Pagination } from 'components'

import {
    ProductPageTitle,
    ProductPageHeaderContainer,
    StyledSpin,
    ProductCardGridContainer,
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
        <div className='min-w-[1000px]'>
            <Carousel />
            <ProductPageHeaderContainer>
                <ProductPageTitle>Products</ProductPageTitle>
                <Button mode='primary' onClick={() => navigate('/products')}>
                    All
                </Button>
            </ProductPageHeaderContainer>

            {isLoading ? (
                <StyledSpin size='large' />
            ) : (
                <ProductCardGridContainer>
                    {data?.products.map((product: TProducts) =>
                        productCard(product),
                    )}
                </ProductCardGridContainer>
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
                spaceBetween={4}
                headerTitle={'Top Products'}
            />
        </div>
    )
}

export default HomePage
