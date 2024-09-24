import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { CreateActivity } from '@/components/createActivity'
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { FilePenLine, Key, Trash2 } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { activityDTO } from "@/dtos/activityDTO";
import { api } from "@/lib/axios";
import test from "node:test";

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

const dataSchema = z.object({
    data: z.string()
})

type DataSchema = z.infer<typeof dataSchema>

export function RelatorioDiario() {
    const [activities, setActivity] = useState<activityDTO[]>([])
    const { register, handleSubmit } = useForm<DataSchema>()

    async function getActivity({ data }: DataSchema) {
        const response = await api.get('/atividade/data', { params: {data: `${data}`}})
        setActivity(response.data)
    }
    return (
        <div className="flex flex-col items-center px-10 pt-5 w-full gap-5">
            {/* Componente para criar as atividades */}
            <div className="flex ml-auto gap-4">
                <form onSubmit={handleSubmit(getActivity)} className="flex gap-3">
                    <Input type="text" placeholder="Data da atividade" {...register("data")} />
                    <Button variant={"outline"} type="submit">Pesquisar</Button>
                </form>
                <CreateActivity />
            </div>
            <ScrollArea className="h-[60vh] overflow-y-auto w-full rounded-md border">
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
                        {activities.map((activity) => (
                            <TableRow id={activity.id}>
                                <TableCell>{activity.data}</TableCell>
                                <TableCell>{activity.index_atividade_tarefa}</TableCell>
                                <TableCell>{activity.Tarefas.codigo}</TableCell>
                                <TableCell>{activity.Tarefas.setor}</TableCell>
                                <TableCell>{activity.Tarefas.descricao}</TableCell>
                                <TableCell>{activity.id_documento}</TableCell>
                                <TableCell>{activity.hora_inicio}</TableCell>
                                <TableCell>{activity.hora_termino}</TableCell>
                                <TableCell className="px-7"><FilePenLine className="w-7 h-7" /></TableCell>
                                <TableCell className="px-7"><Trash2 className="w-7 h-7" /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </ScrollArea>
        </div>
    );
}