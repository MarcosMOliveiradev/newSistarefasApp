import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "./ui/button";
import { AppErrors } from "@/utils/appErrors";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletApi } from "@/api/delet-Activity";

type Delet = {
    id: string
}

export function DeleteButton({ id }: Delet){
    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: deletApi,
        async onSuccess() {
            queryClient.invalidateQueries('atividade')
        },
        onError: (err) => {
            const isAppError = err instanceof AppErrors
            const title = isAppError ? err.message : 'Erro inesperado'
            toast.error(title)
        }
    })

    return (
        <Button variant={"ghost"} onClick={() => mutate(id)} className="hover:bg-red-600">
            <Trash2 className="w-7 h-7" />
        </Button>
    );
}