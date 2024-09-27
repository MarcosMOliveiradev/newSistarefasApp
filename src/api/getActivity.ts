import { activityDTO } from "@/dtos/activityDTO"
import { api } from "@/lib/axios"

export async function getActivity(data: string | null): Promise<activityDTO[]> {
    const token = localStorage.getItem('@SisTarefasToken')
    const response = await api.get('/atividade/data', {
        params: {data: `${data}`}, 
        headers: {Authorization: `Bearer ${token}`} 
    })

    return response.data
}