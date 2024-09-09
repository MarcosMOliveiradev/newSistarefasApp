import { Link } from "react-router-dom";

export function Pdf() {
    return (
        <>
            <h1>Gerar pdf</h1>
            <Link to={"/signin"}>sair</Link>
        </>
    );
}