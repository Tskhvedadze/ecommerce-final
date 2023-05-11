/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Carousel, Card, CarouselCategory, CarouselProduct } from 'components'
import { Loading, HomePagination } from './components'

import { useAxiosFetch } from 'hooks/useFetch/useAxiosFetch'
import { ProductsProps } from 'types/productsAPI.types'

import {
    SProductsContainer,
    SHomeTitle,
    SProductsBTN,
    SGridLayout,
} from './HomePage.styled'

const quotesPerPage = 10
const totalQuotes = 100

const HomePage = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const skip = (currentPage - 1) * quotesPerPage

    const { fetchData, data, loading } = useAxiosFetch({
        endPoint: `?limit=${quotesPerPage}&skip=${skip}&select=title,price,rating,images`,
    })

    useEffect(() => {
        fetchData()
    }, [skip])

    return (
        <>
            <Carousel />
            <SProductsContainer>
                <SHomeTitle>Products</SHomeTitle>
                <SProductsBTN>All </SProductsBTN>
            </SProductsContainer>
            {loading ? (
                <Loading />
            ) : (
                <SGridLayout>
                    {data?.products?.map(
                        ({
                            id,
                            rating,
                            images,
                            price,
                            title,
                        }: ProductsProps) => {
                            return (
                                <Card
                                    key={id}
                                    title={title}
                                    images={images}
                                    rating={rating}
                                    price={price}
                                />
                            )
                        },
                    )}
                </SGridLayout>
            )}
            <HomePagination
                quotesPerPage={quotesPerPage}
                totalQuotes={totalQuotes}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            <CarouselProduct slidesPerView={6} headerTitle={'Top Products'} />
            <CarouselCategory />
        </>
    )
}

export default HomePage
