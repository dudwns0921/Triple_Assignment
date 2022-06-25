import React from 'react'
import ReactDOM from 'react-dom/client'
import { reset } from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

import App from './App.js'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  #root {
    display: flex;
    justify-content: center;
  }
  :root {
    --app-font-style: sans-serif;
    --app-font-color: rgba(58, 58, 58, 0.7); 
  }
  ${reset}
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <GlobalStyles />
    <App />
  </>,
)
