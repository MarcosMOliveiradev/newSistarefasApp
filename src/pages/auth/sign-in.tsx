import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function SignIn() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen border-foreground/5 bg-muted flex flex-col items-center ">
            <h1 className="h-full font-[Jost] font-[700] text-[46px]">W Engenharia</h1>
            <h3 className="flex-1">PJA SisTarefas Web</h3>
            <Button onClick={() => navigate("/") }>dashbord</Button>
        </div>
    );
}