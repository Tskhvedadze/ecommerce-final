import { useTranslation } from 'react-i18next'
import { useSearchBarContext } from 'context'
import { Modal } from 'antd'

import {
    StyledTitle,
    StyledParagraph,
    StyledButtonContainer,
    StyledAntdBtn,
} from './SearchErrorModal.styled'

export const SearchErrorModal = () => {
    const { t } = useTranslation(['components'])
    const { modalOpen, setModalOpen } = useSearchBarContext()

    return (
        <Modal
            centered
            open={modalOpen}
            onCancel={() => setModalOpen(false)}
            footer={null}
        >
            <StyledTitle>{t('searchError')}</StyledTitle>
            <StyledParagraph>{t('keyword')}</StyledParagraph>

            <StyledButtonContainer>
                <StyledAntdBtn onClick={() => setModalOpen(false)}>
                    {t('ok')}
                </StyledAntdBtn>
            </StyledButtonContainer>
        </Modal>
    )
}
