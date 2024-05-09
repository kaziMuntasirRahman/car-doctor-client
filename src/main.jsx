import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import Main from './Layout/Main.jsx'
import AuthProvider from './component/AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto mb-0'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router}>
          <Main />
        </RouterProvider>
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
