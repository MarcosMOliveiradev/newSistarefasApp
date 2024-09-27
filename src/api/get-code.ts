import { codigoDTO } from "@/dtos/codigoDTO"
import { api } from "@/lib/axios"

export async function getCode(codigo: string): Promise<codigoDTO> {
    const token = localStorage.getItem('@SisTarefasToken')
    const { data } = await api.get(`/tasck/codigo?codigoTarefa=${codigo}`,  {
        headers: {
            Authorization: `Bearer ${token}`}
    })

    return data
}