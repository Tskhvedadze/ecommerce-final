/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react'
import { useAxiosFetch } from 'hooks'

import { ProductsProps } from 'types/productsAPI.types'

import { GridContainer, Card, LoadingSpiner } from 'components'
import { useItems } from 'hooks/useItems/useItems'

type ProductsPageProps = {}

function ProductsPage({}: ProductsPageProps) {
    const getItems = useItems('products?limit=100')
    const items = useMemo(() => getItems.data?.products ?? [], [getItems.data])

    // console.log(items)

    const { loading } = useAxiosFetch({
        endPoint: '',
    })

    return (
        <>
            {loading ? (
                <LoadingSpiner />
            ) : (
                <GridContainer className='m-20'>
                    {items.map(
                        ({ id, images, price, title }: ProductsProps) => {
                            return (
                                <Card
                                    key={id}
                                    title={title}
                                    images={images}
                                    price={price}
                                />
                            )
                        },
                    )}
                </GridContainer>
            )}
        </>
    )
}

export default ProductsPage
