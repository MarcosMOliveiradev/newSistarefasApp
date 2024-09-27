import { Button } from "@/components/ui/button"
import { ScrollArea } from "@radix-ui/react-scroll-area";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { List } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCodes } from "@/api/get-codes";

export function CodigoPopover() {
    const [open, setIsOpne] = useState(false)

    const { data: code} = useQuery({
        queryKey: ['code'],
        queryFn: getCodes
    })

    return (
        <Popover open={open} onOpenChange={setIsOpne}>
            <PopoverTrigger className="flex items-center bg-muted-foreground/2">
                <List className="w-7 h-7"/>
                <Button variant={"ghost"}>Código</Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="flex items-center text-center w-[25rem]">
                <ScrollArea className="h-[60vh] overflow-y-auto w-[95%] rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow >
                                <TableHead className="text-center">Código</TableHead>
                                <TableHead className="text-center">Setor</TableHead>
                                <TableHead className="text-center">Descrição</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {code?.map((codigo) => (
                                <TableRow>
                                    <TableCell>{codigo.codigo}</TableCell>
                                    <TableCell>{codigo.setor}</TableCell>
                                    <TableCell>{codigo.descricao}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ScrollArea>
            </PopoverContent>
        </Popover>
    );
}