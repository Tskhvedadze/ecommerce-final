import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Providers from 'providers'
import 'config/i18next/i18n'

import App from 'App'
import 'assets/styles/global.tailwind.css'
import 'react-lazy-load-image-component/src/effects/blur.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Providers>
      <App />
    </Providers>
  </BrowserRouter>,
)
