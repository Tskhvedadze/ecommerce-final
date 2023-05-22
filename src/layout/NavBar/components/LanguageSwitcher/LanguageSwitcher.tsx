import { LanguageSelect } from './LanguageSwitcher.styled'

type LanguageSwitcherProps = {}

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
    return (
        <LanguageSelect>
            <option>GEO</option>
            <option>ENG</option>
        </LanguageSelect>
    )
}
