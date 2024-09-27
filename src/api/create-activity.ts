import { api } from "@/lib/axios"

export interface ICreateActivityBody {
    idDocumento: string,
    quantidadeFolhas: string,
    horaInicio: string,
    horaTermino: string,
    data: string,
    codigoTarefa: number
}

export async function createActivity({ idDocumento, quantidadeFolhas, horaInicio, horaTermino, data, codigoTarefa }: ICreateActivityBody) {
    const token = localStorage.getItem('@SisTarefasToken')
    const response = await api.post('/atividade/', {
        idDocumento,
        quantidadeFolhas,
        horaInicio,
        horaTermino,
        data,
        codigoTarefa,
      }, {
        headers: {
          Authorization: `Bearer ${token}`, // Remova os dois pontos após "Bearer"
        },
      });

    return response.data
}