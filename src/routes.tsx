import { createMemoryRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/sign-in";
import { Dashboard } from "./pages/app/dashbord";
import { AppLayout } from "./pages/_layouts/app";

import { Home } from "./pages/app/home";
import { RelatorioDiario } from "./pages/app/relatorioD";
import { RelatorioMensal } from "./pages/app/relatorioM";
import { userDTO } from "./dtos/userDTO";

const data = localStorage.getItem('@SisTarefasUser')
const user: userDTO = data ? JSON.parse(data) : {}

async function authRoute() {
    let pag = 1;
    user.id ? pag = 0 : pag = 1;

    return pag
}

const routes = [
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: '/', element: <Home/> },
            { path: '/dashboard', element: <Dashboard/> },
            { path: '/relatorio_diario', element: <RelatorioDiario/> },
            { path: '/relatorio_mensal', element: <RelatorioMensal/> },
        ]
        
    },
    {
        path: "/signin",
        element: <SignIn/>
    }
]

const pag = await authRoute()

export const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/signin"],
    initialIndex: pag,
})