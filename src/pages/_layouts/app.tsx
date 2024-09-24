import { Link, Outlet } from "react-router-dom";
import { House, LayoutDashboard } from 'lucide-react'

import Star from '@/assets/star.svg'
import CriarUsuario from '@/assets/criarUsuario.svg'
import Sair from '@/assets/sair.svg'
import Perfil from '@/assets/perfil.svg'

import PerfilDefalt from '@/assets/perfilDefalt.png'
import { CodigoPopover } from "@/components/codigoPopover";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { ButtonFilter } from "@/components/buttonFilter";
import { useAuth } from "@/hooks/useAuth";
import { Relatorio } from "@/components/relatorio";

// TODO: criar componentes para refatorar esse arquivo
export function AppLayout() {
    const { signOut, user } = useAuth()
    return (
        <div className="min-h-screen grid grid-rows-[70px_1fr] grid-cols-[275px_1fr]">
            {/* Logo */}
            <div className="flex h-full bg-muted-foreground/20 border-r border-b border-muted-foreground justify-center items-center">
                <h1 className="font-[Jost] font-[700] text-[30px]">W Engenharia</h1>
            </div>
            {/* parte da barra de pesquisa */}
            <div className="h-[70px] border-b border-muted-foreground flex items-center justify-around">
                <ButtonFilter />
                <div className="flex justify-center items-center gap-2">
                    <img src={Star} alt="Numero de estrelas do selo dourado" />
                    <div className="border border-muted-foreground w-10 h-10 flex justify-center items-center text-[30px]">01</div>
                    <ThemeToggle/>
                </div>

            </div>
            {/* Menu */}
            <div className="h-full border-r border-muted-foreground bg-muted-foreground/20 flex flex-col justify-around items-center">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2 items-center ml-4">
                        <House className="w-7 h-7"/>
                        <Link to={"/"}>Home</Link>
                    </div>
                    {/* componente de Relatorio */}
                    <div>
                        <Relatorio></Relatorio>
                    </div>

                    <div className="flex gap-2 items-center ml-4">
                        <CodigoPopover/>
                    </div>

                    <div className="flex gap-2 items-center ml-4">
                        <LayoutDashboard className="w-7 h-7"/>
                        <Link to={"/dashboard"}>Dashboard</Link>
                    </div>
                </div>
                {/* Perfil */}
                <div className="flex flex-col items-center w-[238px] h-[265px] bg-primary-foreground rounded-lg justify-center gap-3">
                    <img src={user.userAvata ? user.userAvata : PerfilDefalt} alt="Foto de perfil" className="w-[103px] h-[103] rounded-full"/>
                    <p>{user.nome}</p>
                    <p>{user.matricula}</p>

                    <div className="flex gap-2">
                        {user.permission ? <Link to={"/"}><img src={CriarUsuario} alt="Criar novo usuario"/></Link> : <></>}
                        <Link onClick={signOut} to={"/signin"}><img src={Sair} alt="Criar novo usuario"/></Link>
                        <Link to={"/"}><img src={Perfil} alt="Criar novo usuario"/></Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full">
                <Outlet />
            </div>

            <footer className="col-span-2 bg-primary-foreground w-full h-[30px] text-[10px] text-muted-foreground flex items-center justify-center">
                <p>DIREITOS RESERVADOS © W ENGENHARIA LTDA - 2023</p>
            </footer>
        </div>
    );
}