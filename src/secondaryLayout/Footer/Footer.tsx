import { useTranslation } from 'react-i18next'

import { StyledFooter, StyledFooterTitle } from './Footer.styled'

export default function Footer() {
    const { t } = useTranslation(['footer'])
    return (
        <StyledFooter>
            <StyledFooterTitle>{t('Reserved')}</StyledFooterTitle>
        </StyledFooter>
    )
}
