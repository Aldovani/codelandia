import React from 'react'
import ReactDOM from 'react-dom'
import { Rotas } from './routes/routes'
import "./styles/global.scss"

ReactDOM.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>,
  document.getElementById('root')
)
