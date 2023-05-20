import { TProducts } from 'types/productsAPI.types'

function getFilteredProducts(
    allProducts: { products: TProducts[] } | undefined,
    brandName: string,
): TProducts[] | undefined {
    return allProducts?.products?.filter((item: TProducts) =>
        item.brand.includes(brandName),
    )
}

function getDataSlice(
    filteredData: TProducts[] | undefined,
    skip: number,
    itemsPerPage: number,
): TProducts[] | undefined {
    const startIndex = skip
    const endIndex = startIndex + itemsPerPage
    return filteredData?.slice(startIndex, endIndex)
}

const OPTIONS = [
    'Acer',
    'Amazon',
    'Apple',
    'Aquaguard',
    'Asus',
    'Balzano',
    'BenQ',
    'Blaupunkt',
    'Bosch',
    'Boat',
    'Boompods',
    'Croma',
    'Environics',
    'Faber',
    'Haier',
    'Hamilton',
    'Harman',
    'Havells',
    'Hisense',
    'Huawei',
    'JBL',
    'Jabra',
    'Lenovo',
    'LG',
    'Mi',
    'Mobvoi',
    'Nokia',
    'OnePlus',
    'Philips',
    'Pigeon',
    'Plantronic',
    'Portronics',
    'Realme',
    'Samsung',
    'Skullcandy',
    'Sony',
    'SoundLogic',
    'SunKing',
    'TCL',
    'WatchOut',
    'Wonderchef',
    'Xech',
    'Xiaomi',
]

function filteredOptions(brandName: string) {
    return OPTIONS.filter((o) => !brandName.includes(o))
}

export { getFilteredProducts, getDataSlice, filteredOptions }
