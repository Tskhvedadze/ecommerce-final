import { useParams } from 'react-router-dom'

import { BreadcrumbComponent } from 'components'

type SingleProductPageProps = {}

function SingleProductPage(props: SingleProductPageProps) {
    const params = useParams()

    return (
        <div className='flex h-[100vh] justify-center items-center'>
            <h1>{params?.itemID}</h1>
            <BreadcrumbComponent />
        </div>
    )
}

export default SingleProductPage
