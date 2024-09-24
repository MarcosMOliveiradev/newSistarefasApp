import { LayoutList } from "lucide-react";
import { 
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem, 
    NavigationMenuLink, 
    NavigationMenuList, 
    NavigationMenuTrigger 
} from "./ui/navigation-menu";
import { Link } from "react-router-dom";

export function Relatorio() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-muted-foreground/2 gap-2">
                        <LayoutList className="w-7 h-7"/>
                        <p className="flex items-center text-[16px]">Relatório</p>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[350px] lg:grid-cols-[.75fr_1fr]">
                            <NavigationMenuLink className="hover:bg-muted-foreground/20 w-full h-[40px] rounded-md flex pl-2 items-center">
                                <Link to={"/relatorio_diario"}>Relatório diario</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink className="hover:bg-muted-foreground/20 w-full h-[40px] rounded-md flex pl-2 items-center">
                                <Link to={"/relatorio_mensal"}>Relatório Mensal</Link>
                            </NavigationMenuLink>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}