import React, { useState, useEffect } from 'react'
import i18next from 'i18next'
import { LanguageSelect } from './LanguageSwitcher.styled'

const languages = [
    {
        code: 'en',
        name: 'ENG',
        country_code: 'en',
    },
    {
        code: 'ge',
        name: 'GEO',
        country_code: 'ge',
    },
]

export const LanguageSwitcher = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(i18next.language)

    const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguageCode = e.target.value
        i18next.changeLanguage(selectedLanguageCode)
        setSelectedLanguage(selectedLanguageCode)
    }

    useEffect(() => {
        setSelectedLanguage(i18next.language)
    }, [])

    return (
        <LanguageSelect
            value={selectedLanguage}
            onChange={handleChangeLanguage}
        >
            {languages.map(({ name, country_code, code }) => (
                <option key={country_code} value={code}>
                    {name}
                </option>
            ))}
        </LanguageSelect>
    )
}
