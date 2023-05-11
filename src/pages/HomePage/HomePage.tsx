/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { Carousel, Card, CarouselCategory, CarouselProduct } from 'components'
import { Loading } from './components'

import { useAxiosFetch } from 'hooks/useFetch/useAxiosFetch'
import { ProductsProps } from 'types/productsAPI.types'

import {
    SProductsContainer,
    SHomeTitle,
    SProductsBTN,
    SGridLayout,
} from './HomePage.styled'

const HomePage = () => {
    const { fetchData, data, loading, error } = useAxiosFetch({
        endPoint: `?limit=10&skip=0&select=title,price,rating,images`,
    })

    useEffect(() => {
        fetchData()
    }, [])

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
            <CarouselProduct slidesPerView={6} headerTitle={'Top Products'} />
            <CarouselCategory />
        </>
    )
}

export default HomePage
