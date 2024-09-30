import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import button from '@/assets/criarUsuario.svg'
import { useMutation } from "@tanstack/react-query";
import { createActivity } from "@/api/create-activity";
import { toast } from "sonner";
import { AppErrors } from "@/utils/appErrors";

const relatorioSchema = z.object({
    data: z.string(),
    codigoTarefa: z.string(),
    idDocumento: z.string(),
    quantidadeFolhas: z.string(),
    horaInicio: z.string(),
    horaTermino: z.string()
})

type RelatorioSchema = z.infer<typeof relatorioSchema>

export function CreateActivity() {
    const { register, handleSubmit } = useForm<RelatorioSchema>()
    const { mutateAsync: creation } = useMutation({
        mutationFn: createActivity
    })

    async function create({ data, codigoTarefa, horaInicio, horaTermino, idDocumento, quantidadeFolhas }: RelatorioSchema) {
        const code = parseInt(codigoTarefa)
        try {
            await creation({
                data,
                codigoTarefa: code,
                horaInicio,
                horaTermino,
                idDocumento,
                quantidadeFolhas
            })
            toast.success('Atividade Criada com sucesso')
        } catch (err) {
            const isAppError = err instanceof AppErrors
            const title = isAppError ? err.message : 'Falha na criação'
            toast.error(title)
        }
    }
    
    return (
        <Dialog>
            <DialogTrigger asChild className="ml-auto">
                <Button variant={"ghost"} className="w-[3rem] p-0"><img src={button} alt="Criar nova atividade" /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[47rem] h-[30rem] flex flex-col justify-around items-center gap-4 py-4">
                <DialogHeader>
                    <DialogTitle className="text-[2rem]">Cadastro de atividades</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(create)} className="grid grid-cols-3 gap-10 py-10">
                    <div>
                        <Input placeholder="Data" type="string" {...register('data')}></Input>
                    </div>
                    <div>
                        <Input type="string" placeholder="Código de atividade" {...register('codigoTarefa')}></Input>
                    </div>
                    
                    <div>
                        <Input type="text" placeholder="Id Documento" {...register('idDocumento')}></Input>
                    </div>
                    <div>
                        <Input type="text" placeholder="Quantidade de folhas" {...register('quantidadeFolhas')}></Input>
                    </div>
                    <div>
                        <Input type="text" placeholder="Hora de inicio" {...register('horaInicio')}></Input>
                    </div>
                    <div>
                        <Input type="text" placeholder="Hora de termino" {...register('horaTermino')}></Input>
                    </div>
                    <Button type="submit" className="col-start-2">Salvar</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}