import { useParams } from 'react-router-dom'
type SingleProductPageProps = {}

function SingleProductPage({}: SingleProductPageProps) {
    const { itemID } = useParams()

    return (
        <div className='flex h-[200px] justify-center items-center'>
            Single Products ID : {itemID}
        </div>
    )
}

export default SingleProductPage
