/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { usePagination } from './context'
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

const HomePage = () => {
    const { itemsPerPage, skip } = usePagination()
    const { fetchData, data, loading } = useAxiosFetch({
        endPoint: `?limit=${itemsPerPage}&skip=${skip}&select=title,price,rating,images`,
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
            <HomePagination />
            <CarouselProduct slidesPerView={6} headerTitle={'Top Products'} />
            <CarouselCategory />
        </>
    )
}

export default HomePage
