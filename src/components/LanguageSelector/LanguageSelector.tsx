import { LanguageSelect } from './LanguageSelector.styled'

type LanguageSelectorProps = {}

export const LanguageSelector = (props: LanguageSelectorProps) => {
    return (
        <LanguageSelect>
            <option>GEO</option>
            <option>ENG</option>
        </LanguageSelect>
    )
}
