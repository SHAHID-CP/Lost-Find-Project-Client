import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routes/routes'
import AuthProvider from './Context/AuthProvider'


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ThemeProvider } from './Theme/ThemeProvider'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
