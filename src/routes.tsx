import { createMemoryRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/sign-in";
import { Dashboard } from "./pages/app/dashbord";

const routes = [
    {
        path: "/",
        element: <Dashboard />
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