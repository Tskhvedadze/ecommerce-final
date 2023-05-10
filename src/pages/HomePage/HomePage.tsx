/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { Carousel, Card, CarouselCategory, CarouselProduct } from 'components'

import { useAxiosFetch } from 'hooks/useFetch/useAxiosFetch'
import { ProductsProps } from 'types/productsAPI.types'

import { SGridLayout } from 'publicLayout/GridLayout/GridLayout.styled'
// import { Div, Container } from './HomePage.styled'

const HomePage = () => {
    const { fetchData, data, loading } = useAxiosFetch('')

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Carousel />
            <SGridLayout>
                {!loading &&
                    data?.products.map(
                        ({
                            id,
                            rating,
                            images,
                            brand,
                            price,
                        }: ProductsProps<string | number>) => {
                            return (
                                <Card
                                    key={id}
                                    images={images}
                                    rating={rating}
                                    brand={brand}
                                    price={price}
                                />
                            )
                        },
                    )}
            </SGridLayout>
            <CarouselProduct />
            <CarouselCategory />
        </>
    )
}

export default HomePage
