import React from 'react'
import { Space, Spin } from 'antd'

export const LoadingSpiner: React.FC = () => (
    <Space
        style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'orange',
        }}
    >
        <Spin size='large'>
            <div className='content' />
        </Spin>
    </Space>
)
