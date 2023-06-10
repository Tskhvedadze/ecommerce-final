import { useCallback, useState } from 'react'
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'
import { Select } from 'antd'

import { filteredOptions } from './util/productsUtils/productsUtils'
import { ProductCard, BreadcrumbComponent, ErrorMsg } from 'components'
import { TProducts } from 'types/productsAPI.types'

import {
    OuterContainer,
    InnerContainer,
    FilterContainer,
    ResultsContainer,
    ProductCardContainer,
} from './Products.styled'
import { public_axios } from 'utils'

function Products() {
    const { t } = useTranslation(['ProductsPage'])
    const [brandName, setBrandName] = useState<string>('Amazon')

    const { data, error }: { data: any; error: any } = useQuery(
        ['allProducts', brandName],
        async () => {
            const res = await public_axios.post('/products', {
                keyword: brandName,
                page_size: 44,
                page_number: 0,
            })
            return res?.data
        },
    )

    const handleBrandChange = useCallback((value: string) => {
        setBrandName(value)
    }, [])

    if (error?.message) {
        return <ErrorMsg errorText={error?.message} />
    }

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
                            }: TProducts) => (
                                <ProductCard
                                    key={id}
                                    id={id}
                                    brand={brand}
                                    images={images}
                                    price={price}
                                    title={title}
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
