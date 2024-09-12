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

const relatorioSchema = z.object({
    data: z.date(),
    codigoTarefa: z.number(),
    idDocumento: z.string(),
    quantidadeFolhas: z.string(),
    horaInicio: z.string(),
    horaTermino: z.string()
})

type RelatorioSchema = z.infer<typeof relatorioSchema>

export function CreateActivity() {
    const { register, handleSubmit, formState: { isSubmitted } } = useForm<RelatorioSchema>()
    async function createActiveti(data: RelatorioSchema) {
        console.log(data)
    }
    return (
        <Dialog>
                    <DialogTrigger asChild>
                        <Button variant={"ghost"} className="w-[3rem] p-0"><img src={button} alt="Criar nova atividade" /></Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[47rem] h-[30rem] flex flex-col justify-around items-center gap-4 py-4">
                        <DialogHeader>
                            <DialogTitle className="text-[2rem]">Cadastro de atividades</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit(createActiveti)} className="grid grid-cols-3 gap-10 py-10">
                            <div>
                                <Input placeholder="Data" type="date" {...register('data')}></Input>
                            </div>
                            <div>
                                <Input type="number" placeholder="Código de atividade" {...register('codigoTarefa')}></Input>
                            </div>
                            <div>
                                <Input type="text" placeholder="Setor" readOnly></Input>
                            </div>
                            <div className="col-span-2">
                                <Input type="text" placeholder="Descrição da atividade" readOnly></Input>
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
                            <Button disabled={isSubmitted} type="submit" className="col-start-2">Salvar</Button>
                        </form>
                    </DialogContent>
                </Dialog>
    );
}