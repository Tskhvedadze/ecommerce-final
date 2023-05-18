import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { TProducts } from 'types/productsAPI.types'

import { getAllProducts } from 'utils'

import { ProductCard, LoadingSpiner, Pagination } from 'components'

function ProductsPage() {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [brand, setBrand] = useState<string>('LG')

    const itemsPerPage = 8
    const skip = (currentPage - 1) * itemsPerPage

    const { isLoading, data, refetch } = useQuery(
        ['products', currentPage],
        () => getAllProducts(itemsPerPage, skip, brand),
        {
            keepPreviousData: true,
        },
    )

    useEffect(() => {
        refetch()
    }, [brand, currentPage, refetch])

    useEffect(() => {
        if (data?.total_found <= skip) {
            // Adjust the current page when the total items are reduced
            setCurrentPage(Math.ceil(Number(data.total_found) / itemsPerPage))
        }
    }, [data?.total_found, itemsPerPage, skip])

    return (
        <div className='flex justify-between items-center'>
            <div className='flex justify-center items-center flex-col w-[20%]'>
                <h1 className='text-2xl uppercase underline '>
                    FIlter By Brand Names
                </h1>
                <div className='flex flex-col items-start'>
                    <button
                        onClick={() => {
                            setBrand('TCL')
                            setCurrentPage(1)
                        }}
                    >
                        TCL
                    </button>
                    <button
                        onClick={() => {
                            setBrand('samsung')
                            setCurrentPage(1)
                        }}
                    >
                        Samsung
                    </button>
                    <button
                        onClick={() => {
                            setBrand('apple')
                            setCurrentPage(1)
                        }}
                    >
                        Apple
                    </button>
                    <button
                        onClick={() => {
                            setBrand('lenovo')
                            setCurrentPage(1)
                        }}
                    >
                        Lenovo
                    </button>
                    <button
                        onClick={() => {
                            setBrand('nokia')
                            setCurrentPage(1)
                        }}
                    >
                        nokia
                    </button>
                    <button
                        onClick={() => {
                            setBrand('iphone')
                            setCurrentPage(1)
                        }}
                    >
                        iphone
                    </button>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-4 gap-2 max-w-[1000px] py-10 pl-10  my-4 ml-5 border'>
                    {data?.products.map(
                        ({ id, images, price, brand }: TProducts) => {
                            return (
                                <ProductCard
                                    id={id}
                                    key={id}
                                    brand={brand}
                                    images={images}
                                    price={price}
                                />
                            )
                        },
                    )}
                </div>
                <Pagination
                    totalItems={data?.total_found}
                    setCurrentPage={setCurrentPage}
                    itemsPerPage={itemsPerPage}
                />
            </div>
        </div>
    )
}

export default ProductsPage
