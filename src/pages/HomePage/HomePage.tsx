/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import {
    Carousel,
    Card,
    CarouselProduct,
    Button,
    SMainContainer,
    SGridContainer,
} from 'components'
import { Loading, HomePagination } from './components'

import { useAxiosFetch } from 'hooks'
import { ProductsProps } from 'types/productsAPI.types'

import { SProductsContainer, SHomeTitle } from './HomePage.styled'

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
        <SMainContainer>
            <Carousel />
            <SProductsContainer>
                <SHomeTitle>Products</SHomeTitle>
                <Button mode='primary'>All</Button>
            </SProductsContainer>
            {loading ? (
                <Loading />
            ) : (
                <SGridContainer>
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
                </SGridContainer>
            )}
            <HomePagination
                totalItems={totalItems}
                setCurrentPage={setCurrentPage}
                itemsPerPage={itemsPerPage}
            />
            <CarouselProduct headerTitle={'Top Products'} />
        </SMainContainer>
    )
}

export default HomePage
