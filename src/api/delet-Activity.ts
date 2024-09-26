import { api } from "@/lib/axios"
import { toast } from "sonner"

export async function deletApi(id: string) {
    const token = localStorage.getItem('@SisTarefasToken')
    const { data } = await api.delete(`/atividade/delet/${id}`, { headers: {Authorization: `Bearer ${token}`}})
    toast.success(data.message)
}