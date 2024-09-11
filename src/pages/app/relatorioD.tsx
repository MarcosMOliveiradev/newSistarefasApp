import { Button } from "@/components/ui/button";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import button from '@/assets/criarUsuario.svg'
import edit from '@/assets/Edit.svg'
import trash from '@/assets/trash.svg'
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Input } from "@/components/ui/input";
import { z } from 'zod'
import { useForm } from "react-hook-form";

const teste = [
    {
        Data: "19/02/24",
        Item: "01",
        Codigo: "601",
        Setor: "Refeitório",
        Descricao: "Baixa de nota fiscal do refeitório",
        Id_doc: "1206",
        Inicio: "13:06",
        Termino: "13:08",
        Edit: "e",
        Delete: "X"
    },
    {
        Data: "19/02/24",
        Item: "01",
        Codigo: "601",
        Setor: "Refeitório",
        Descricao: "Baixa de nota fiscal do refeitório",
        Id_doc: "1206",
        Inicio: "13:06",
        Termino: "13:08",
        Edit: "e",
        Delete: "X"
    },
    {
        Data: "19/02/24",
        Item: "01",
        Codigo: "601",
        Setor: "Refeitório",
        Descricao: "Baixa de nota fiscal do refeitório",
        Id_doc: "1206",
        Inicio: "13:06",
        Termino: "13:08",
        Edit: "e",
        Delete: "X"
    },
    {
        Data: "19/02/24",
        Item: "01",
        Codigo: "601",
        Setor: "Refeitório",
        Descricao: "Baixa de nota fiscal do refeitório",
        Id_doc: "1206",
        Inicio: "13:06",
        Termino: "13:08",
        Edit: "e",
        Delete: "X"
    },
    {
        Data: "19/02/24",
        Item: "01",
        Codigo: "601",
        Setor: "Refeitório",
        Descricao: "Baixa de nota fiscal do refeitório",
        Id_doc: "1206",
        Inicio: "13:06",
        Termino: "13:08",
        Edit: "e",
        Delete: "X"
    },
    {
        Data: "19/02/24",
        Item: "01",
        Codigo: "601",
        Setor: "Refeitório",
        Descricao: "Baixa de nota fiscal do refeitório",
        Id_doc: "1206",
        Inicio: "13:06",
        Termino: "13:08",
        Edit: "e",
        Delete: "X"
    },
    {
        Data: "19/02/24",
        Item: "01",
        Codigo: "601",
        Setor: "Refeitório",
        Descricao: "Baixa de nota fiscal do refeitório",
        Id_doc: "1206",
        Inicio: "13:06",
        Termino: "13:08",
        Edit: "e",
        Delete: "X"
    },
    {
        Data: "19/02/24",
        Item: "01",
        Codigo: "601",
        Setor: "Refeitório",
        Descricao: "Baixa de nota fiscal do refeitório",
        Id_doc: "1206",
        Inicio: "13:06",
        Termino: "13:08",
        Edit: "e",
        Delete: "X"
    },
    {
        Data: "19/02/24",
        Item: "01",
        Codigo: "601",
        Setor: "Refeitório",
        Descricao: "Baixa de nota fiscal do refeitório",
        Id_doc: "1206",
        Inicio: "13:06",
        Termino: "13:08",
        Edit: "e",
        Delete: "X"
    },
    {
        Data: "19/02/24",
        Item: "01",
        Codigo: "601",
        Setor: "Refeitório",
        Descricao: "Baixa de nota fiscal do refeitório",
        Id_doc: "1206",
        Inicio: "13:06",
        Termino: "13:08",
        Edit: "e",
        Delete: "X"
    },
    {
        Data: "19/02/24",
        Item: "01",
        Codigo: "601",
        Setor: "Refeitório",
        Descricao: "Baixa de nota fiscal do refeitório",
        Id_doc: "1206",
        Inicio: "13:06",
        Termino: "13:08",
        Edit: "e",
        Delete: "X"
    },
    {
        Data: "19/02/24",
        Item: "01",
        Codigo: "601",
        Setor: "Refeitório",
        Descricao: "Baixa de nota fiscal do refeitório",
        Id_doc: "1206",
        Inicio: "13:06",
        Termino: "13:08",
        Edit: "e",
        Delete: "X"
    },
    {
        Data: "19/02/24",
        Item: "01",
        Codigo: "601",
        Setor: "Refeitório",
        Descricao: "Baixa de nota fiscal do refeitório",
        Id_doc: "1206",
        Inicio: "13:06",
        Termino: "13:08",
        Edit: "e",
        Delete: "X"
    },
    {
        Data: "19/02/24",
        Item: "01",
        Codigo: "601",
        Setor: "Refeitório",
        Descricao: "Baixa de nota fiscal do refeitório",
        Id_doc: "1206",
        Inicio: "13:06",
        Termino: "13:08",
        Edit: "e",
        Delete: "X"
    }
]
const relatorioSchema = z.object({
    data: z.date(),
    codigoTarefa: z.number(),
    idDocumento: z.string(),
    quantidadeFolhas: z.string(),
    horaInicio: z.string(),
    horaTermino: z.string()
})

type RelatorioSchema = z.infer<typeof relatorioSchema>

export function RelatorioDiario() {
    const { register, handleSubmit, formState: { isSubmitted } } = useForm<RelatorioSchema>()

    async function createActiveti(data: RelatorioSchema) {
        
    }
    return (
        <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col p-5 items-end w-[95%] gap-5">
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
                <ScrollArea className="h-[60vh] overflow-y-auto w-[95%] rounded-md border">
                    <Table className="text-center">
                        <TableHeader>
                            <TableRow className="text-center">
                                <TableHead className="w-[80px] text-center">Data</TableHead>
                                <TableHead className="w-[80px] text-center">Item</TableHead>
                                <TableHead className="w-[80px] text-center">Código</TableHead>
                                <TableHead className="text-center">Setor</TableHead>
                                <TableHead className="text-center">Descrição</TableHead>
                                <TableHead className="w-[100px] text-center">Id Doc</TableHead>
                                <TableHead className="w-[90px] text-center">Inicio</TableHead>
                                <TableHead className="w-[90px] text-center">Termino</TableHead>
                                <TableHead className="w-[80px] text-center">Edit</TableHead>
                                <TableHead className="w-[80px] text-center">Delete</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {teste.map((test) => (
                                <TableRow>
                                    <TableCell>{test.Data}</TableCell>
                                    <TableCell>{test.Item}</TableCell>
                                    <TableCell>{test.Codigo}</TableCell>
                                    <TableCell>{test.Setor}</TableCell>
                                    <TableCell>{test.Descricao}</TableCell>
                                    <TableCell>{test.Id_doc}</TableCell>
                                    <TableCell>{test.Inicio}</TableCell>
                                    <TableCell>{test.Termino}</TableCell>
                                    <TableCell className="px-7"><img src={edit} alt="Editar" /></TableCell>
                                    <TableCell className="px-7"><img src={trash} alt="Excluir" /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ScrollArea>
            </div>
            <div></div>
        </div>
    );
}