import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'

import { queryClient } from 'utils/api/api'
import { Providers } from 'providers/Providers'

import App from 'App'
import 'assets/styles/global.tailwind.css'

import 'i18n'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Providers>
                    <App />
                </Providers>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>,
)
