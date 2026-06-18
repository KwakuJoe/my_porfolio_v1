import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { RouterProvider } from 'react-router'
import router from '@/routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{isolation: 'isolate'}}>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
