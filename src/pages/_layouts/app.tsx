import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Outlet } from "react-router-dom";
import { Search, Star } from 'lucide-react'

export function AppLayout() {
    return (
        <div className="min-h-screen grid grid-rows-[70px_1fr] grid-cols-[275px_1fr]">
            <div className="flex h-full border-r border-b border-muted-foreground justify-center items-center">
                <h1 className="font-[Jost] font-[700] text-[30px]">W Engenharia</h1>
            </div>
            <div className="h-[70px] border-b border-muted-foreground flex items-center justify-around">
                <form className="flex justify-center items-center gap-4">
                    <Search className="h-10 w-10 text-muted-foreground"/>
                    <Input id="pesquisar " placeholder=""/>
                    <Button>Diario</Button>
                </form>
                <div className="flex justify-center items-center gap-2">
                    <Star className="h-10 w-10 text-orange-foreground"/>
                    <div className="border border-muted-foreground w-10 h-10 flex justify-center items-center text-[30px]">01</div>
                </div>
            </div>
            <div className="h-full border-r border-b border-muted-foreground">
                <p>menu</p>
            </div>

            <div>
                <Outlet />
            </div>
        </div>
    );
}