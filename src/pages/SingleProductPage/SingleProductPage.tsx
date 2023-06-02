import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'

import { apiClient2 } from 'utils'
import { MyImage, Content } from './components'
import { BreadcrumbComponent } from 'components'

import { BreadcrumbContianer, MainContent } from './SingleProductPage.styled'

function SingleProductPage() {
    const { itemID } = useParams()

    const getSingleProduct = async () => {
        const response = await apiClient2.get(`/product/${itemID}`)
        return response?.data
    }

    const { data, refetch } = useQuery(['singleProduct'], getSingleProduct)

    useEffect(() => {
        refetch()
    }, [itemID, refetch])

    return (
        <>
            <BreadcrumbContianer>
                <BreadcrumbComponent title={data?.title} />
            </BreadcrumbContianer>
            <MainContent>
                <MyImage {...data} />
                <Content {...data} />
            </MainContent>
        </>
    )
}

export default SingleProductPage
