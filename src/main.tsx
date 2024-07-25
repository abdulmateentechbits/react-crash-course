import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import UserProdvider from './ContextApi/UserProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProdvider>
      <App />
    </UserProdvider>
  </React.StrictMode>,
)
