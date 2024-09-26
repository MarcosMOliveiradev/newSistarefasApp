import { userDTO } from "@/dtos/userDTO";
import { api } from "@/lib/axios";

export async function getProfile() {
    const data = localStorage.getItem('@SisTarefasToken')
    const response = await api.get<userDTO>('/usuario/profile', {headers: {Authorization: `Bearer ${data}`}})
    const user = JSON.stringify(response.data)

    localStorage.setItem('@SisTarefasUser', user)
    return response.data
}