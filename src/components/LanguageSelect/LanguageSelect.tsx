import { useState, useEffect } from 'react'
import i18next from 'i18next'
import { Select } from 'antd'

const languages = [
  {
    value: 'en',
    label: 'ENG',
    country_code: 'en',
  },
  {
    value: 'ge',
    label: 'GEO',
    country_code: 'ge',
  },
]

type LanguageSelectProps = {
  status?: 'warning'
}

export const LanguageSelect = ({ status }: LanguageSelectProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18next.language)

  const handleChangeLanguage = (value: string) => {
    i18next.changeLanguage(value)
    setSelectedLanguage(value)
  }

  useEffect(() => {
    setSelectedLanguage(i18next.language)
  }, [])

  return (
    <Select
      size='large'
      status={status}
      defaultValue={selectedLanguage}
      onChange={handleChangeLanguage}
      options={languages}
    />
  )
}
