import { Link } from "react-router-dom";

export function RelatorioDiario() {
    return (
        <>
            <h1>Relatorio diario</h1>
            <Link to={"/signin"}>sair</Link>
        </>
    );
}