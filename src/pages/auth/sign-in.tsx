import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export function SignIn() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen border-foreground/5 bg-muted flex flex-col items-center justify-center">
            <div className="flex flex-col items-center text-secondary-foreground mb-10">
                <h1 className="h-full font-[Jost] font-[700] text-[46px] p-5">W Engenharia</h1>
                <h3 className="flex-1">PJA SisTarefas Web</h3>
            </div>
            <form className="space-y-4">
                <div className="space-y-2 w-[340px]">
                    <Input id="matricula" type="text" placeholder="Matricula" className="text-[18px]" />
                </div>
                <div className="space-y-2 w-[340px]">
                    <Input id="senha" type="password" placeholder="Senha" className="text-[18px]" />
                </div>
                <Button type="submit" className="w-full" onClick={() => navigate("/") }>dashbord</Button>
            </form>
        </div>
    );
}