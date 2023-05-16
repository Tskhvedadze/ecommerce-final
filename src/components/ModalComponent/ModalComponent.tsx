import { StyledModal, SModalP } from './ModalComponent.styled'

type ModalComponentProps = {
    title: string
    message?: string
    email: string
    subject?: string
    open: boolean
    handleCancelModal: () => void
}

export const ModalComponent = ({
    title,
    message,
    email,
    subject,
    open,
    handleCancelModal,
}: ModalComponentProps): JSX.Element => {
    return (
        <>
            <StyledModal
                title={title}
                centered
                open={open}
                onCancel={handleCancelModal}
            >
                <SModalP>{email}</SModalP>
                <SModalP>{subject}</SModalP>
                <p>{message}</p>
            </StyledModal>
        </>
    )
}
