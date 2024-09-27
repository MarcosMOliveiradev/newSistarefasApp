import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { ScrollArea } from "@radix-ui/react-scroll-area";
  import { FilePenLine } from "lucide-react";
  import { useForm } from "react-hook-form";
  import { z } from "zod";
  
  import { CreateActivity } from '@/components/createActivity'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DeleteButton } from "@/components/deleteButton";
import { useQuery } from "@tanstack/react-query";
import { getActivity } from "@/api/getActivity";
import { useState } from "react";
import { TableSkeleton } from "@/components/skeleton/tableSkeleton";

const dataSchema = z.object({
    data: z.string()
})



type DataSchema = z.infer<typeof dataSchema>

export function RelatorioDiario() {
    const { register, handleSubmit } = useForm<DataSchema>()
    const [selectData, setSelectData] = useState<string | null>(null)

    const { data: activities, isLoading } = useQuery({
        queryKey: ['atividade', selectData],
        queryFn: async () => await getActivity(selectData!)
    })

    async function handlegetActivity({ data }: DataSchema) {
        setSelectData(data)
    }

    return (
        <div className="flex flex-col items-center px-10 pt-5 w-full gap-5">
            {/* Componente para criar as atividades */}
            <div className="flex ml-auto gap-4">
                <form onSubmit={handleSubmit(handlegetActivity)} className="flex gap-3">
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
                        {
                            isLoading ? ( <TableSkeleton /> ) :
                            activities?.map((activity: any) => (
                            <TableRow key={activity.id}>
                                <TableCell>{activity.data}</TableCell>
                                <TableCell>{activity.index_atividade_tarefa}</TableCell>
                                <TableCell>{activity.Tarefas.codigo}</TableCell>
                                <TableCell>{activity.Tarefas.setor}</TableCell>
                                <TableCell>{activity.Tarefas.descricao}</TableCell>
                                <TableCell>{activity.id_documento}</TableCell>
                                <TableCell>{activity.hora_inicio}</TableCell>
                                <TableCell>{activity.hora_termino}</TableCell>
                                <TableCell >
                                    <Button variant={"ghost"} className="w-full">
                                        <FilePenLine className="w-7 h-7" />
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <DeleteButton id={activity.id}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </ScrollArea>
        </div>
    );
}