import './global.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider';
import { AuthContextProvider } from './api/authContext';

export function App() {
  return (
    <>
      <ThemeProvider storageKey="SisTarefasThem" defaultTheme="system">
        <Toaster closeButton richColors position="top-center"/>
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </ThemeProvider>
    </>
  )
}
