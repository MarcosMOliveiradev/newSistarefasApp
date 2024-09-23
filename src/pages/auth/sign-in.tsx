import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { z } from 'zod'
import { toast } from 'sonner'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { AppErrors } from "@/utils/appErrors";
import { useState } from "react";

const signInForm = z.object({
    matricula: z.string(),
    password: z.string()
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
    const [isLoad, setIsLoad] = useState(false)
    const { register, handleSubmit } = useForm<SignInForm>()
    const navigate = useNavigate()
    const { signIn } = useAuth()

    async function handleSignIn(data: SignInForm) {
        const matricula = parseInt(data.matricula)
        try {
            setIsLoad(true)
            await signIn({
                matricula,
                password: data.password
            })

            navigate('/')
        } catch (err) {
            const isAppErro = err instanceof AppErrors;

            setIsLoad(false)

            const title = isAppErro ? err.message : "Não foi possivel entrar. Tente novamente mias tarde"
            toast.error(
                title
            )
        }
    }

    return (
        <div className="min-h-screen border-foreground/5 bg-muted flex flex-col items-center justify-center">
            <div className="flex flex-col items-center text-secondary-foreground mb-10">
                <h1 className="h-full font-[Jost] font-[700] text-[46px] p-5">W Engenharia</h1>
                <h3 className="flex-1">PJA SisTarefas Web</h3>
            </div>
            <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
                <div className="space-y-2 w-[340px]">
                    <Input id="matricula" type="number" placeholder="Matricula" {...register('matricula')} className="text-[18px]" />
                </div>
                <div className="space-y-2 w-[340px]">
                    <Input id="senha" type="password" placeholder="Senha" {...register('password')} className="text-[18px]" />
                </div>
                <Button disabled={isLoad} type="submit" className="w-full">Entrar</Button>
            </form>
        </div>
    );
}