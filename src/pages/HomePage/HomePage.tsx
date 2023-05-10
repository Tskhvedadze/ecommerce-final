/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import {
    Carousel,
    Card,
    CarouselCategory,
    CarouselProduct,
    Loading,
} from 'components'

import { useAxiosFetch } from 'hooks/useFetch/useAxiosFetch'
import { ProductsProps } from 'types/productsAPI.types'

import { SGridLayout } from 'publicLayout/GridLayout/GridLayout.styled'
import { SProductsContainer, SHomeTitle, SProductsBTN } from './HomePage.styled'

const params = {
    limit: 8,
    skip: 0,
    // select: 'title,price,rating,brand,category,images',
}

const HomePage = () => {
    const { fetchData, data, loading } = useAxiosFetch('', {
        ...params,
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
            <SGridLayout>
                {loading ? (
                    <Loading />
                ) : (
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
                    )
                )}
            </SGridLayout>

            <CarouselProduct />
            <CarouselCategory />
        </>
    )
}

export default HomePage
