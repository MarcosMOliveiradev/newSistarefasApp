import { codigoDTO } from "@/dtos/codigoDTO";
import { api } from "@/lib/axios";

export async function getCode(): Promise<codigoDTO[]> {
    const token = localStorage.getItem('@SisTarefasToken')
    const { data } = await api.get('/tasck/', { headers: {Authorization: `Bearer ${token}`}})

    return data
}