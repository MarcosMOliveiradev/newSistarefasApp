import { Link } from "react-router-dom";

export function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <Link to={"/signin"}>sair</Link>
        </>
    );
}