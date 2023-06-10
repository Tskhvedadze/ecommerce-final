import { useCallback, useState } from 'react'
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'
import { Select } from 'antd'

import { apiClient2 } from 'config/api/api'
import { filteredOptions } from './util/productsUtils/productsUtils'

import { ProductCard, BreadcrumbComponent } from 'components'
import { TProducts } from 'types/productsAPI.types'

import {
    OuterContainer,
    InnerContainer,
    FilterContainer,
    ResultsContainer,
    ProductCardContainer,
} from './Products.styled'

function Products() {
    const { t } = useTranslation(['ProductsPage'])
    const [brandName, setBrandName] = useState<string>('smartphones')

    const { data } = useQuery(['allProducts', brandName], async () => {
        const res = await apiClient2.get(`/products/category/${brandName}`)
        return res?.data
    })

    const handleBrandChange = useCallback((value: string) => {
        setBrandName(value)
    }, [])

    return (
        <OuterContainer>
            <InnerContainer>
                <FilterContainer>
                    <h1>{t('filter')}</h1>
                    <Select
                        defaultValue={brandName}
                        value={brandName}
                        showSearch
                        size='large'
                        onChange={handleBrandChange}
                        style={{ width: '17rem' }}
                        options={filteredOptions(brandName).map((item) => ({
                            value: item,
                            label: item,
                        }))}
                    />
                    <BreadcrumbComponent title={brandName} />
                </FilterContainer>
                <ResultsContainer>
                    <ProductCardContainer>
                        {data?.products.map(
                            ({
                                id,
                                images,
                                price,
                                brand,
                                title,
                                rating,
                            }: TProducts) => (
                                <ProductCard
                                    key={id}
                                    id={id}
                                    brand={brand}
                                    images={images}
                                    price={price}
                                    title={title}
                                    rating={rating}
                                />
                            ),
                        )}
                    </ProductCardContainer>
                </ResultsContainer>
            </InnerContainer>
        </OuterContainer>
    )
}

export default Products
