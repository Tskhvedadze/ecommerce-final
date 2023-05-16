/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useAxiosFetch } from 'hooks'

import { ProductsProps } from 'types/productsAPI.types'

import {
    Carousel,
    Card,
    CarouselProduct,
    Button,
    SMainContainer,
    SGridContainer,
} from 'components'

import { HomePagination } from './components'

import { SHomePageHeaderContainer, SHomePageTitle } from './HomePage.styled'

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
            <SHomePageHeaderContainer>
                <SHomePageTitle>Products</SHomePageTitle>
                <Button mode='primary'>All</Button>
            </SHomePageHeaderContainer>
            {/* {loading ? (
                <Loading />
            ) : ( */}
            <SGridContainer>
                {data?.products?.map(
                    ({ id, rating, images, price, title }: ProductsProps) => {
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
            {/* )} */}
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
