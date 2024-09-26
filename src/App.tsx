import './global.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider';
import { queryClient } from '@/lib/react-query'
import { QueryClientProvider } from '@tanstack/react-query';

export function App() {
  return (
    <>
      <ThemeProvider storageKey="SisTarefasThem" defaultTheme="system">
        <Toaster duration={1000} closeButton richColors position="top-center"/>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}
