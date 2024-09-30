import { api } from "@/lib/axios"

export async function getTotalActivity(matriculaQuery: number) {
    const token = localStorage.getItem('@SisTarefasToken')
    const { data } = await api.get(`/atividade/cout/${matriculaQuery}`, {headers: {Authorization: `Bearer: ${token}`}})

    return data
}