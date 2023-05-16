import { Modal } from 'antd'

import styled from 'styled-components'
import tw from 'twin.macro'

export const StyledModal = styled(Modal)`
    .ant-modal-content {
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    .ant-modal-close {
        display: none;
    }

    .ant-modal-header {
        background-color: green;
        color: #fff;
        border-bottom: none;
        padding: 16px 24px;
        border-radius: 8px 8px 0 0;
    }

    .ant-modal-title {
        color: #fff;
    }

    .ant-modal-body {
        padding: 24px;
        border: 1px solid;
        border-radius: 0 0 8px 8px;
    }

    .ant-modal-footer {
        border-top: none;
        padding: 16px 24px;
        border-radius: 0 0 4px 4px;
    }

    .ant-btn-primary {
        display: none;
    }

    .ant-btn-default {
        background-color: #ff9900;
        border-color: #ff9900;
        color: #fff;
        &:hover {
            background-color: #febd69;
            border-color: #febd69;
        }
    }
`

export const SModalP = styled.p`
    ${tw`mb-4 text-orange-400`}
`
