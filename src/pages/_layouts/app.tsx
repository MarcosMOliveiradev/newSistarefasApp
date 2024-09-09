import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, Outlet } from "react-router-dom";
import { Search } from 'lucide-react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"

import Star from '@/assets/star.svg'
import Dashboard from '@/assets/dashboard.svg'
import Relatorio from '@/assets/relatorio.svg'
import Lista from '@/assets/lista.svg'
import Home from '@/assets/home.svg'
import CriarUsuario from '@/assets/criarUsuario.svg'
import Sair from '@/assets/sair.svg'
import Perfil from '@/assets/perfil.svg'

import PerfilDefalt from '@/assets/perfilDefalt.png'

export function AppLayout() {
    return (
        <div className="min-h-screen grid grid-rows-[70px_1fr] grid-cols-[275px_1fr]">
            {/* Logo */}
            <div className="flex h-full bg-muted-foreground/20 border-r border-b border-muted-foreground justify-center items-center">
                <h1 className="font-[Jost] font-[700] text-[30px]">W Engenharia</h1>
            </div>
            {/* parte da barra de pesquisa */}
            <div className="h-[70px] border-b border-muted-foreground flex items-center justify-around">
                <form className="flex justify-center items-center gap-4">
                    <Search className="h-10 w-10 text-muted-foreground"/>
                    <Input id="pesquisar " placeholder=""/>
                    <Button>Diario</Button>
                </form>
                <div className="flex justify-center items-center gap-2">
                    <img src={Star} alt="Numero de estrelas do selo dourado" />
                    <div className="border border-muted-foreground w-10 h-10 flex justify-center items-center text-[30px]">01</div>
                </div>
            </div>
            {/* Menu */}
            <div className="h-full border-r border-muted-foreground bg-muted-foreground/20 flex flex-col justify-around items-center">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2 items-center ml-4">
                        <img src={Home} alt="Ico Home" />
                        <Link to={"/"}>Home</Link>
                    </div>

                    <div>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-muted-foreground/2">
                                        <img src={Relatorio} alt="icon relarorio" />
                                        <Link className="flex items-center" to={"/relatorio"}>Relatório</Link>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[350px] lg:grid-cols-[.75fr_1fr]">
                                            <NavigationMenuLink><Link to={"/signin"}>Relatório diario</Link></NavigationMenuLink>
                                            <NavigationMenuLink><Link to={"/"}>Relatório Mensal</Link></NavigationMenuLink>
                                            <NavigationMenuLink><Link to={"/"}>Gerar PDF</Link></NavigationMenuLink>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="flex gap-2 items-center ml-4">
                        <img src={Lista} alt="Ico Lista de Códigos" />
                        <Link to={"/"}>Códigos</Link>
                    </div>

                    <div className="flex gap-2 items-center ml-4">
                        <img src={Dashboard} alt="Ico Lista de Códigos" />
                        <Link to={"/"}>Dashboard</Link>
                    </div>
                </div>

                <div className="flex flex-col items-center w-[238px] h-[265px] bg-primary-foreground rounded-lg justify-around">
                    <img src={PerfilDefalt} alt="Foto de perfil" className="w-[103px] h-[103]"/>
                    <p>Marcos Monteiro</p>
                    <p>984</p>

                    <div className="flex gap-3">
                        <Link to={"/"}><img src={CriarUsuario} alt="Criar novo usuario"/></Link>
                        <Link to={"/signin"}><img src={Sair} alt="Criar novo usuario"/></Link>
                        <Link to={"/"}><img src={Perfil} alt="Criar novo usuario"/></Link>
                    </div>
                </div>
            </div>

            <div>
                <Outlet />
            </div>
        </div>
    );
}