import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { apiClient2 } from 'config/api/api'

import { MyImage, Content, Suggestions } from './components'
import { BreadcrumbComponent, ErrorMsg } from 'components'

import { BreadcrumbContianer, MainContent } from './SingleProductPage.styled'

function SingleProductPage() {
    const { itemID } = useParams()

    const {
        status,
        data,
        error,
        isError,
    }: { status: string; data: any; error: any; isError: boolean } = useQuery({
        queryKey: ['singleProduct', itemID],
        queryFn: async () => {
            const res = await apiClient2.get(`/product/${itemID}`)
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
                <Content {...data} />
            </MainContent>
            <Suggestions category={data?.category} />
        </>
    )
}

export default SingleProductPage
