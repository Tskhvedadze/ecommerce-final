import { useParams } from 'react-router-dom'

import { BreadcrumbComponent } from 'components'

type SingleProductPageProps = {}

function SingleProductPage({}: SingleProductPageProps) {
    const params = useParams()

    return (
        <div className='flex h-[100vh] justify-center items-center'>
            <BreadcrumbComponent />
        </div>
    )
}

export default SingleProductPage
