import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'
import { ThemeProvider } from 'next-themes'
import { Toaster } from './components/ui/sonner'
import { ThemeToggle } from './components/ThemeToggle'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <App />
      <Toaster richColors closeButton expand={false} />
      <ThemeToggle />
    </ThemeProvider>
  </StrictMode>,
)
