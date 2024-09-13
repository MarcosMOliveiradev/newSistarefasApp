import { createMemoryRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/sign-in";
import { Dashboard } from "./pages/app/dashbord";
import { AppLayout } from "./pages/_layouts/app";

import { Home } from "./pages/app/home";
import { RelatorioDiario } from "./pages/app/relatorioD";
import { RelatorioMensal } from "./pages/app/relatorioM";
import { Pdf } from "./pages/app/pdf";

const routes = [
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: '/', element: <Home/> },
            { path: '/dashboard', element: <Dashboard/> },
            { path: '/relatorio_diario', element: <RelatorioDiario/> },
            { path: '/relatorio_mensal', element: <RelatorioMensal/> },
            { path: '/pdf', element: <Pdf/> }
        ]
        
    },
    {
        path: "/signin",
        element: <SignIn/>
    }
]

export const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/signin"],
    initialIndex: 1,
})