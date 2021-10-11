import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import AuthContextProvider from './context/authContext'
import ShopContextProvider from './context/shopContext'

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
