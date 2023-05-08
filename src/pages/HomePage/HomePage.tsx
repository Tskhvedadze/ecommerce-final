import { useEffect, useState } from 'react'
import axios from 'axios'

import { Carousel, Card, CarouselCategory, CarouselProduct } from 'components'

import { SGridLayout } from 'publicLayout/GridLayout/GridLayout.styled'

import { Div, Container } from './HomePage.styled'

import { CardProps } from 'components/Card/Card'

type ProductsProps = {
    id: number
}

type ProductsCardProps = ProductsProps & CardProps

const HomePage = () => {
    const [data, setData] = useState<ProductsCardProps[] | null>()

    useEffect(() => {
        const url = `https://dummyjson.com/products?limit=12&skip=0&select=title,price,rating,brand,category,images`

        axios.get(url).then((res) => {
            setData(res.data?.products)
        })
    }, [])

    return (
        <>
            <Carousel />

            <SGridLayout>
                {data?.map((product) => {
                    return (
                        <Card
                            key={product.id}
                            images={product.images}
                            rating={product.rating}
                            brand={product.brand}
                            title={product.title}
                            price={product.price}
                            category={product.category}
                        />
                    )
                })}
            </SGridLayout>

            <CarouselProduct />
            <CarouselCategory />
        </>
    )
}

export default HomePage
