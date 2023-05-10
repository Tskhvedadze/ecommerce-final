// export type ProductsProps = {
//     id: number
//     title: string
//     description: string
//     thumbnail: string
//     price: number
//     rating: number
//     brand: string
//     category: string
//     images: string[]
// }

// export type FetchDataProps = {
//     limit: number
//     products: ProductsProps[]
//     skip: number
//     total: number
// }

export type FetchDataProps<T> = {
    products: T[]
    total?: number
    limit?: number
    skip?: number
}

export type ProductsProps<T extends string | number> = {
    id: T
    title: T
    description: T
    thumbnail: T
    price: T extends number ? T : number
    rating: T extends number ? T : number
    brand: T
    category: T
    images: T extends string ? T[] : string[]
}
