/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Carousel, Card, CarouselProduct } from 'components'
import { Loading, HomePagination } from './components'

import { useAxiosFetch } from 'hooks/useFetch/useAxiosFetch'
import { ProductsProps } from 'types/productsAPI.types'

import {
    SProductsContainer,
    SHomeTitle,
    SProductsBTN,
    SGridLayout,
} from './HomePage.styled'

const HomePage = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const itemsPerPage = 10
    const totalItems = 100
    const skip = (currentPage - 1) * itemsPerPage

    const { fetchData, data, loading } = useAxiosFetch({
        endPoint: `?limit=${itemsPerPage}&skip=${skip}&select=title,price,rating,images,thumn`,
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
                totalItems={totalItems}
                setCurrentPage={setCurrentPage}
                itemsPerPage={itemsPerPage}
            />
            <CarouselProduct slidesPerView={5} headerTitle={'Top Products'} />
        </>
    )
}

export default HomePage
