export type ProductsProps = {
    id: number
    title: string
    description: string
    thumbnail: string
    price: number
    rating: number
    brand: string
    category: string
    images: string[]
}

export type FetchDataProps = {
    limit: number
    products: ProductsProps[]
    skip: number
    total: number
}
