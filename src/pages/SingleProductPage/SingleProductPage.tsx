import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from 'hook'

import { MyImage, Content, Suggestions } from './components'
import { BreadcrumbComponent } from 'components'

import { BreadcrumbContianer, MainContent } from './SingleProductPage.styled'

function SingleProductPage() {
    const { itemID } = useParams()

    const { data, refetch } = useFetch({
        url: `/product/${itemID}`,
        caching: ['singleProduct'],
    })

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
            <Suggestions category={data?.category} />
        </>
    )
}

export default SingleProductPage
