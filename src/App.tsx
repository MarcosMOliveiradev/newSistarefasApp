import './global.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider';

export function App() {
  return (
    <>
      <ThemeProvider storageKey="SisTarefasThem" defaultTheme="system">
        <Toaster richColors position="top-center"/>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </>
  )
}
