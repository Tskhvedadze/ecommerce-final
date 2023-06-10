import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'

import { MyImage, Suggestions } from './components'
import Content from './components/Content/Content'
import { BreadcrumbComponent, ErrorMsg } from 'components'

import { BreadcrumbContianer, MainContent } from './SingleProduct.styled'
import { public_axios } from 'utils'

function SingleProduct() {
    const { itemID } = useParams()
    const [rating] = useState(() =>
        Number((Math.random() * (5 - 3.7) + 3.7).toFixed(1)),
    )

    const {
        status,
        data,
        error,
        isError,
    }: { status: string; data: any; error: any; isError: boolean } = useQuery({
        queryKey: ['singleProduct', itemID],
        queryFn: async () => {
            const res = await public_axios.get(`/product/${itemID}`)
            return res?.data
        },
    })

    if (status === 'error' && isError)
        return <ErrorMsg errorText={error.message} />

    return (
        <>
            <BreadcrumbContianer>
                <BreadcrumbComponent title={data?.title} />
            </BreadcrumbContianer>
            <MainContent>
                <MyImage {...data} />
                <Content {...data} rating={rating} />
            </MainContent>
            <Suggestions brand={data?.brand} />
        </>
    )
}

export default SingleProduct
