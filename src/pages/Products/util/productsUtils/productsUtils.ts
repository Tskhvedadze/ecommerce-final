const OPTIONS = [
  'Amazon',
  'Apple',
  'Aquaguard',
  'BenQ',
  'Blaupunkt',
  'Bosch',
  'Boat',
  'Boompods',
  'Environics',
  'Faber',
  'Haier',
  'Harman',
  'Havells',
  'Huawei',
  'JBL',
  'Jabra',
  'LG',
  'Mi',
  'Nokia',
  'OnePlus',
  'Philips',
  'Portronics',
  'Realme',
  'Samsung',
  'Skullcandy',
  'SoundLogic',
  'Wonderchef',
  'Xiaomi',
]

export function filteredOptions(brandName: string) {
  return OPTIONS.filter((o) => !brandName.includes(o))
}
