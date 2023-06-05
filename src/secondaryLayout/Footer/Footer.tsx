import { useTranslation } from 'react-i18next'

import { StyledFooter } from './Footer.styled'

export default function Footer() {
    const { t } = useTranslation(['footer'])
    return <StyledFooter>{t('Reserved')}</StyledFooter>
}
