import { SSelect } from './Language.styled'

type LanguageProps = {}

export const Language = (props: LanguageProps) => {
    return (
        <SSelect>
            <option>GEO</option>
            <option>ENG</option>
        </SSelect>
    )
}
