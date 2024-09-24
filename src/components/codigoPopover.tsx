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
import { useCallback, useEffect, useState } from "react";
import { codigoDTO } from "@/dtos/codigoDTO";
import { AppErrors } from "@/utils/appErrors";
import { toast } from "sonner";
import { api } from "@/lib/axios";

export function CodigoPopover() {
	const [code, setCode] = useState<codigoDTO[]>([])

	async function getCode() {
		try {
			const { data } = await api.get('/tasck/')
			setCode(data)
		} catch (err) {
			const isAppError = err instanceof AppErrors;
			const title = isAppError ? err.message : "Não foi possível se conectar com o sistema, tente novamente em instantes"
			toast.error(title)
		}
	}

	useEffect(
		useCallback(() => {
            getCode()
        }, [])
	)
    return (
        <Popover >
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
                            {code.map((codigo) => (
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