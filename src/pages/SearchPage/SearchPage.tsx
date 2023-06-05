import { useFetch } from 'hook'
import { useParams } from 'react-router-dom'

type SearchPageProps = {}

function SearchPage(props: SearchPageProps) {
    const { keyword } = useParams()
    const { data } = useFetch({
        url: `products/search?q=${keyword}`,
        caching: ['searchResult'],
    })

    console.log(...data?.products)

    return <div>Search Result is {keyword}'s</div>
}

export default SearchPage
