export type TProducts = {
    id: number
    title: string
    brand: string
    category: string
    amount: number
    description: string
    rating: number
    price: number
    images: string[]
}

export type TFetchedData = {
    products: TProducts[]
    total_found: number
}
