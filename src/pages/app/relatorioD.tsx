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
import { FilePenLine, Trash2 } from "lucide-react";

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

export function RelatorioDiario() {
    return (
        <div className="flex flex-col items-center px-10 pt-5 w-full gap-5">
            {/* Componente para criar as atividades */}
            <CreateActivity />
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