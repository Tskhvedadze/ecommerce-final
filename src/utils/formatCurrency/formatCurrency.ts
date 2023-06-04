export const formatCurrency = (number: number, currentLanguage: string) => {
    const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
        currency: currentLanguage,
        style: 'currency',
    })

    const newCurrency = currentLanguage === 'GEL' ? number * 2.6335 : number

    return CURRENCY_FORMATER.format(newCurrency)
}
