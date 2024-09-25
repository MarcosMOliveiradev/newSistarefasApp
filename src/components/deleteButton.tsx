import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { AppErrors } from "@/utils/appErrors";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

type Delet = {
    id: string
}

export function DeleteButton({ id }: Delet){
    function teste(id: string) {

        console.log(id)
        // const { data: activity} = useQuery({
        //     queryKey: ['activity', id],
        //     queryFn: () => delet(id)
        // })
    }
    
    async function delet(id: string) {
        try {
            const { data } = await api.delete(`/atividade/delet/${id}`)
            console.log(data)
        } catch (err) {
            const isAppError = err instanceof AppErrors
            const title = isAppError ? err.message : 'Erro inesperado'
            toast.error(title)
        }
    }
    return (
        <Button variant={"ghost"} onClick={() => teste(id)} className="hover:bg-red-600">
            <Trash2 className="w-7 h-7" />
        </Button>
    );
}