import { codigoDTO } from "@/dtos/codigoDTO";
import { api } from "@/lib/axios";

export async function getCodes(): Promise<codigoDTO[]> {
    const token = localStorage.getItem('@SisTarefasToken')
    const { data } = await api.get('/tasck/', { headers: {Authorization: `Bearer ${token}`}})

    return data
}