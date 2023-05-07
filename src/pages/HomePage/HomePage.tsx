import { useEffect, useState } from 'react'
import axios from 'axios'

import { Carousel, Card, CarouselCategory, CarouselProduct } from 'components'

import { SGridLayout } from './GridLayout/GridLayout'
import { Div, Container } from './HomePage.styled'

import { CardProps } from 'components/Card/Card'

type ProductsProps = {
    id: number
}

type ProductsCardProps = ProductsProps & CardProps

const HomePage = () => {
    const [limit, setLimit] = useState<number>(12)

    const [data, setData] = useState<ProductsCardProps[] | null>()

    const skip = limit - 12

    useEffect(() => {
        const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,rating,brand,category,images`

        axios.get(url).then((res) => {
            setData(res.data?.products)
        })
    }, [limit, skip])

    return (
        <Div>
            <Container>testing</Container>
            <Carousel />
            <SGridLayout>
                {data
                    ? data.map((product) => {
                          return (
                              <Card
                                  key={product.id}
                                  images={product.images[0]}
                                  rating={product.rating}
                                  brand={product.brand}
                                  title={product.title}
                                  price={product.price}
                                  category={product.category}
                              />
                          )
                      })
                    : null}
            </SGridLayout>
            <div className='flex justify-center'>
                <button
                    onClick={() => setLimit((prev) => prev - 12)}
                    className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                    Previous
                </button>

                <button
                    onClick={() => setLimit((prev) => prev + 12)}
                    className='inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                    Next
                </button>
            </div>
            <CarouselProduct />
            <CarouselCategory />
        </Div>
    )
}

export default HomePage
